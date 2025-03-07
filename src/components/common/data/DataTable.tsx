
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SearchField } from "../forms/SearchField";

interface Column<T> {
    header: string;
    accessor: keyof T | ((row: T) => any);
    cell?: (info: { getValue: () => any, row: T }) => React.ReactNode;
    sortable?: boolean;
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
    onRowClick?: (row: T) => void;
    hoverable?: boolean;
    pagination?: boolean;
    pageSize?: number;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    hideHeader?: boolean;
}

export function DataTable<T>({
    data,
    columns,
    className,
    onRowClick,
    hoverable = false,
    pagination = false,
    pageSize = 10,
    searchable = false,
    searchPlaceholder = "Search...",
    emptyMessage = "No data available",
    hideHeader = false,
}: DataTableProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<{
        key: keyof T | ((row: T) => any) | null;
        direction: "asc" | "desc";
    }>({ key: null, direction: "asc" });
    const [searchTerm, setSearchTerm] = useState("");

    // Sorting logic
    const sortedData = [...data].sort((a, b) => {
        if (!sortConfig.key) return 0;

        let valueA: any;
        let valueB: any;

        if (typeof sortConfig.key === "function") {
            valueA = sortConfig.key(a);
            valueB = sortConfig.key(b);
        } else {
            valueA = a[sortConfig.key];
            valueB = b[sortConfig.key];
        }

        if (valueA === valueB) return 0;

        // Handle string comparison (case-insensitive)
        if (typeof valueA === "string" && typeof valueB === "string") {
            return sortConfig.direction === "asc"
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }

        // Handle number comparison
        return sortConfig.direction === "asc"
            ? valueA < valueB ? -1 : 1
            : valueA > valueB ? -1 : 1;
    });

    // Search logic
    const filteredData = searchTerm
        ? sortedData.filter((row) =>
            columns.some((column) => {
                const value = typeof column.accessor === "function"
                    ? column.accessor(row)
                    : row[column.accessor];

                return value !== null && value !== undefined
                    ? String(value).toLowerCase().includes(searchTerm.toLowerCase())
                    : false;
            })
        )
        : sortedData;

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = pagination
        ? filteredData.slice(startIndex, startIndex + pageSize)
        : filteredData;

    const handleSort = (column: Column<T>) => {
        if (!column.sortable) return;

        setSortConfig((prevSortConfig) => {
            const isSameColumn =
                prevSortConfig.key === column.accessor ||
                (typeof prevSortConfig.key === "function" &&
                    typeof column.accessor === "function" &&
                    prevSortConfig.key.toString() === column.accessor.toString());

            if (isSameColumn) {
                return {
                    key: column.accessor,
                    direction: prevSortConfig.direction === "asc" ? "desc" : "asc",
                };
            }

            return {
                key: column.accessor,
                direction: "asc",
            };
        });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getValue = (row: T, column: Column<T>) => {
        if (typeof column.accessor === "function") {
            return column.accessor(row);
        }
        return row[column.accessor];
    };

    const renderCell = (row: T, column: Column<T>) => {
        const value = getValue(row, column);
        return column.cell
            ? column.cell({
                getValue: () => value,
                row
            })
            : value;
    };

    const getSortIcon = (column: Column<T>) => {
        if (!column.sortable) return null;

        const isSorted =
            sortConfig.key === column.accessor ||
            (typeof sortConfig.key === "function" &&
                typeof column.accessor === "function" &&
                sortConfig.key.toString() === column.accessor.toString());

        if (!isSorted) return <ChevronDown size={16} className="text-muted-foreground opacity-30" />;

        return sortConfig.direction === "asc" ? (
            <ChevronUp size={16} className="text-primary" />
        ) : (
            <ChevronDown size={16} className="text-primary" />
        );
    };

    return (
        <div className={cn("w-full space-y-4 animate-fade-in", className)}>
            {searchable && (
                <SearchField
                    placeholder={searchPlaceholder}
                    value={searchTerm}
                    onChange={(value) => setSearchTerm(value)}
                    wrapperClassName="max-w-xs"
                />
                // <div className="flex items-center py-4">
                //     <Input
                //         placeholder="Filter emails..."
                //         value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                //         onChange={(event) =>
                //             table.getColumn("email")?.setFilterValue(event.target.value)
                //         }
                //         className="max-w-sm"
                //     />
                // </div>
            )}
            <div className="w-full overflow-auto border border-border/50 rounded-lg bg-card/50 backdrop-blur-[2px]">
                <table className="w-full">
                    {!hideHeader && (
                        <thead>
                            <tr className="border-b border-border/50 bg-accent/30">
                                {columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className={cn(
                                            "px-4 py-3 text-left text-sm font-medium text-foreground/80",
                                            column.sortable && "cursor-pointer select-none hover:text-primary transition-colors",
                                            column.className
                                        )}
                                        onClick={() => handleSort(column)}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>{column.header}</span>
                                            {column.sortable && <span>{getSortIcon(column)}</span>}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={cn(
                                        "border-b border-border/30 last:border-0",
                                        hoverable && onRowClick && "hover:bg-accent/40 cursor-pointer transition-colors",
                                        rowIndex % 2 === 1 && "bg-muted/30"
                                    )}
                                    onClick={() => onRowClick && onRowClick(row)}
                                >
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={cn("px-4 py-3 text-sm", column.className)}
                                        >
                                            {renderCell(row, column)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-4 py-8 text-center text-muted-foreground"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {pagination && totalPages > 1 && (
                <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        Showing {startIndex + 1}-{Math.min(startIndex + pageSize, filteredData.length)} of{" "}
                        {filteredData.length} entries
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-md hover:bg-accent/40 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                        >
                            <ChevronLeft size={16} />
                            <span className="sr-only">Previous page</span>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={cn(
                                    "px-3 py-1 rounded-md hover:bg-accent/40 transition-colors",
                                    page === currentPage &&
                                    "bg-primary text-primary-foreground hover:bg-primary/90"
                                )}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-md hover:bg-accent/40 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                        >
                            <ChevronRight size={16} />
                            <span className="sr-only">Next page</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
