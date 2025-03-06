"use client"

import { ArrowRight, TrendingUp } from "lucide-react"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart"
import { Link } from "react-router"
import { Button } from "../ui/button"
const chartData = [
    { browser: "chrome", visitors: 275, fill: "red" },
    { browser: "safari", visitors: 200, fill: "blue" },
    { browser: "firefox", visitors: 187, fill: "green" },
    { browser: "edge", visitors: 173, fill: "purple" },
    { browser: "other", visitors: 90, fill: "yellow" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
        color: "grey",
    },
    chrome: {
        label: "Chrome",
        color: "red",
    },
    safari: {
        label: "Safari",
        color: "blue",
    },
    firefox: {
        label: "Firefox",
        color: "green",
    },
    edge: {
        label: "Edge",
        color: "purple",
    },
    other: {
        label: "Other",
        color: "yellow",
    },
} satisfies ChartConfig

export function Graph() {
    return (
        <Card className="w-[50%]">
            <CardHeader>
                <div className="flex gap-2 ms-auto">
                    <Link to="/user-management/users">
                        <Button>View more <ArrowRight /></Button>
                    </Link>
                </div>
                <CardTitle>Line Chart - Dots Colors (Demo)</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer 
                        data={chartData}
                        margin={{
                            top: 24,
                            left: 24,
                            right: 24,
                        }}
                        height={200} // Adjust the height here
                    >
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    nameKey="visitors"
                                    hideLabel
                                />
                            }
                        />
                        <Line
                            dataKey="visitors"
                            type="natural"
                            stroke="var(--color-visitors)"
                            strokeWidth={2}
                            dot={({ payload, ...props }) => {
                                return (
                                    <Dot
                                        key={payload.browser}
                                        r={5}
                                        cx={props.cx}
                                        cy={props.cy}
                                        fill={payload.fill}
                                        stroke={payload.fill}
                                    />
                                )
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>

            </CardFooter>
        </Card>
    )
}
