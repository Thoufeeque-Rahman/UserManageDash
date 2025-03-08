import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    className?: string;
    siblingCount?: number;
}

export function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    className,
    siblingCount = 1,
}: PaginationProps) {
    const [pages, setPages] = useState<(number | string)[]>([]);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Generate page numbers to display
    useEffect(() => {
        const generatePagination = () => {
            if (totalPages <= 5 + siblingCount * 2) {
                // Less than 7 pages, show all
                return Array.from({ length: totalPages }, (_, i) => i + 1);
            } 

            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

            const showLeftDots = leftSiblingIndex > 2;
            const showRightDots = rightSiblingIndex < totalPages - 1;

            if (!showLeftDots && showRightDots) {
                // Show first pages without left dots
                const leftItemCount = 3 + 2 * siblingCount;
                const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
                return [...leftRange, '...', totalPages];
            }

            if (showLeftDots && !showRightDots) {
                // Show last pages without right dots
                const rightItemCount = 3 + 2 * siblingCount;
                const rightRange = Array.from(
                    { length: rightItemCount },
                    (_, i) => totalPages - rightItemCount + i + 1
                );
                return [1, '...', ...rightRange];
            }

            if (showLeftDots && showRightDots) {
                // Show middle pages with dots on both sides
                const middleRange = Array.from(
                    { length: rightSiblingIndex - leftSiblingIndex + 1 },
                    (_, i) => leftSiblingIndex + i
                );
                return [1, '...', ...middleRange, '...', totalPages];
            }
        };

        setPages(generatePagination() || []);
    }, [totalPages, currentPage, siblingCount]);

    // Early return if only one page
    if (totalPages <= 1) return null;

    const goToFirstPage = () => {
        if (currentPage !== 1) onPageChange(1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const goToLastPage = () => {
        if (currentPage !== totalPages) onPageChange(totalPages);
    };

    return (
        <nav
            className={cn(
                "flex items-center justify-center space-x-1 select-none",
                className
            )}
            aria-label="Pagination"
        >
            {/* First page button */}
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200"
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                aria-label="Go to first page"
            >
                <ChevronsLeft className="h-4 w-4" />
            </Button>

            {/* Previous page button */}
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page numbers */}
            <div className="flex items-center space-x-1">
                {pages.map((page, i) => {
                    if (page === '...') {
                        return (
                            <span
                                key={`ellipsis-${i}`}
                                className="w-8 h-8 flex items-center justify-center text-sm text-gray-500"
                            >
                                ...
                            </span>
                        );
                    }

                    const pageNum = page as number;
                    return (
                        <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? "default" : "ghost"}
                            size="icon"
                            className={cn(
                                "h-8 w-8 transition-all duration-200",
                                currentPage === pageNum
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-secondary"
                            )}
                            onClick={() => onPageChange(pageNum)}
                            aria-current={currentPage === pageNum ? "page" : undefined}
                            aria-label={`Page ${pageNum}`}
                        >
                            {pageNum}
                        </Button>
                    );
                })}
            </div>

            {/* Next page button */}
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Last page button */}
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200"
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                aria-label="Go to last page"
            >
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </nav>
    );
}