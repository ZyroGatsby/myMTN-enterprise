/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import List from '@/components/lists/List';

export default function ManageSubscriptionsAllContent() {
  return (
    <div className="text-base">
      {/* A */}
      <h6 className="mb-0">Active subscriptions</h6>
      <List
       interval="Monthly"
       label="XtraTallk 1000"
       purchaseDate="20 Jan 2022"
       renewalDate="23 Apr 2022"
       renewalStatus={false}
       dataBalance="300 MB"
       dataTalktime="₦1,000"
       variant="data"
      />
      <List
       interval="Daily"
       label="Youtube night"
       purchaseDate="20 Jan 2022"
       renewalDate="23 Apr 2022"
       renewalStatus={true}
       dataBalance="300 MB"
       dataTalktime="₦600"
       variant="data"
      />
      <List
       interval="Monthly"
       label="Netflix subscription"
       purchaseDate="20 Jan 2022"
       renewalDate="23 Apr 2022"
       renewalStatus={true}
       subscriptionPrice="₦499"
       variant="subscription"
      />

      {/* B */}
      <h6 className="mb-0">Expired subscriptions</h6>
      <List
       interval="Monthly"
       label="XtraTallk 1000"
       purchaseDate="20 Jan 2022"
       renewalDate="23 Apr 2022"
       renewalStatus={false}
       dataBalance="300 MB"
       dataTalktime="₦600"
       expired={true}
       variant="data"
      />
    </div>
  );
}
