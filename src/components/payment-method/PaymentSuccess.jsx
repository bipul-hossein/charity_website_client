import { Link } from "react-router-dom"

export default function PaymentSuccess() {
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen bg-background">
            <div className="mx-auto space-y-6 bg-white/20 p-4 md:p-6 rounded-md px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="bg-green-500 rounded-full p-4">
                        <CheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold">Payment Successful</h1>
                    <p className="text-muted-foreground">
                        Thank you for your purchase! Your transaction was completed successfully.
                    </p>
                </div>
                <div>
                    <div>
                        <h3>Order Summary</h3>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 items-center">
                            <span className="text-muted-foreground">Total:</span>
                            <span className="text-right font-medium">$99.00</span>
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <span className="text-muted-foreground">Payment Method:</span>
                            <div className="flex items-center gap-2 justify-end">
                                <CreditCardIcon className="h-5 w-5" />
                                <span className="font-medium">Visa **** 4242</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap-reverse gap-4 mt-4">
                        <Link
                            to="/"
                            className="bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors"
                            prefetch={false}
                        >
                            Return to Home
                        </Link>
                        <Link
                            to=""
                            className="bg-[#14649b] text-white py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors"
                            prefetch={false}
                        >
                            Download payment receipt
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function CreditCardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}