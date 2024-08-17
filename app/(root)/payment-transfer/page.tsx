import DoughnutChart from "@/components/DoughnutChart";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const PaymentTransfer = () => {
  const loggedIn = { firstName: "Ronak" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Payment Transfer"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250}
          />
        </header>
      </div>
    </section>
  );
};

export default PaymentTransfer;
