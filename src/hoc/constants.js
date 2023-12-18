import React from 'react'
import { ReactComponent as DashboardIcon } from "../images/key.svg";
import { ReactComponent as BoxIcon } from "../images/box.svg";
import { ReactComponent as MessageIcon } from "../images/message.svg";
import { ReactComponent as MoneyIcon } from "../images/money.svg";
import { ReactComponent as PercentIcon } from "../images/percent.svg";
import { ReactComponent as PersonIcon } from "../images/person.svg";

export const items = [{
    key: 'Dashboard',
    icon: React.createElement(DashboardIcon),
    label: `Dashboard`,
  },
  {
    key: 'Product',
    icon: React.createElement(BoxIcon),
    label: `Product`,
    children: new Array(4).fill(null).map((_, i) => {
      return {
        key: i,
        label: `Option ${i + 1}`,
      };
    }),
  },
  {
    key: 'Customers',
    icon: React.createElement(PersonIcon),
    label: `Customers`,
    children: new Array(4).fill(null).map((_, i) => {
      return {
        key: i,
        label: `Option ${i + 1}`,
      };
    }),
  },
  {
    key: 'Income',
    icon: React.createElement(MoneyIcon),
    label: `Income`,
    children: new Array(4).fill(null).map((_, i) => {
      return {
        key: i,
        label: `Option ${i + 1}`,
      };
    }),
  },
  {
    key: 'Promote',
    icon: React.createElement(PercentIcon),
    label: `Promote`,
    children: new Array(4).fill(null).map((_, i) => {
      return {
        key: i,
        label: `Option ${i + 1}`,
      };
    }),
  },
  {
    key: 'Help',
    icon: React.createElement(MessageIcon),
    label: `Help`,
    children: new Array(4).fill(null).map((_, i) => {
      return {
        key: i,
        label: `Option ${i + 1}`,
      };
    }),
  },
]
