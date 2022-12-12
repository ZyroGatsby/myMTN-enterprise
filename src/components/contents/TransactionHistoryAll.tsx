/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import HistoryList from '@/components/lists/HistoryList';

export default function TransactionHistoryAllContent() {
  return (
    <div className="text-base">
      {/* A */}
      <h6 className="mb-0">March 2022</h6>
      <HistoryList
       type="Recharge"
       day="Wed"
       date="18"
       name="Victoria"
       description="Recharge for Victoria"
       amount="₦5,000"
       paidVia="Debit card"
       transactionId="MTN12345"
      />
      <HistoryList
       type="Recharge"
       day="Wed"
       date="18"
       name="John"
       description="Shared airtime with John"
       amount="₦5,000"
       paidVia="Airtime"
       transactionId="MTN12345"
      />
      
    </div>
  );
}
