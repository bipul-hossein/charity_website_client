import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const isFetched = useRef(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get("session_id");
  const teamName = urlParams.get("teamName");
  const division = urlParams.get("division");
  const player1Name = urlParams.get("player1Name");
  const player2Name = urlParams.get("player2Name");
  const player1Email = urlParams.get("player1Email");
  const player2Email = urlParams.get("player2Email");
  const player1Phone = urlParams.get("player1Phone");
  const player2Phone = urlParams.get("player2Phone");
  const memo = urlParams.get("memo");

  useEffect(() => {
    if (isFetched.current) return; // Prevent multiple fetches
    isFetched.current = true;

    fetch(
      `http://localhost:5000/api/event/session-status?session_id=${sessionId}&teamName=${teamName}&division=${division}&player1Name=${player1Name}&player2Name=${player2Name}&player1Email=${player1Email}&player2Email=${player2Email}&player1Phone=${player1Phone}&player2Phone=${player2Phone}&memo=${memo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/badminton/registration/payment-method" />;
  }

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen bg-background">
      <div className="mx-auto space-y-6 bg-gray-100/20 p-4 md:p-6 rounded-md px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-green-500 rounded-full p-4">
            <CheckIcon className="h-8 w-8 text-gray-100" />
          </div>
          <h1 className="text-3xl font-bold">Payment Successful</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase! Your transaction was completed
            successfully.
          </p>
        </div>
        <div>
          <div>
            <h3>Order Summary</h3>
          </div>
          {/* <div className="grid gap-4">
            <div className="grid grid-cols-2 items-center">
              <span className="text-muted-foreground">Total:</span>
              <span className="text-right font-medium">$99.00</span>
            </div>
          </div> */}
          <div className="flex justify-between flex-wrap-reverse gap-4 mt-4">
            <Link
              to="/"
              className="bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors"
              prefetch={false}
            >
              Return to Home
            </Link>
            <Link
              to=""
              className="bg-[#14649b] text-gray-100 py-2 px-4 rounded-md hover:bg-[#0062BD] transition-colors"
              prefetch={false}
            >
              Download payment receipt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  );
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
  );
}

export default PaymentSuccess;
