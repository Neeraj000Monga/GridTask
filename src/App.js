import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Switch,
  TextField,
  IconButton,
  Button,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Accordion,
  AccordionSummary,
  Divider,
  AccordionDetails,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
const AudioParamMap = ({}) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const handleAccordionToggle = (panelIndex) => {
    setExpandedAccordion(panelIndex === expandedAccordion ? null : panelIndex);
  };

  // console.log(permissions,"permissions");
  function groupPermissionsByKeyword(permissions) {
    // List of keywords to search for in the 'codename' property
    const keywords = [
      "Account",
      "Call and Meeting",
      "Advisor",
      "Billing",
      "Cait",
      "Clients",
      "Compliance",
      "CRM",
      "Custodians",
      "Files management",
      "Firm",
      "Hedge Fund",
      "Holdings",
      "Household",
      "Investment",
      "Migration",
      "Model",
      "Money Movement",
      "Notes",
      "Notifications",
      "Onboarding",
      "Performance",
      "Private Fund",
      "Query Builder",
      "Quotes",
      "Reconciliation",
      "Reports",
      "Restriction",
      "Search",
      "Securities",
      "Setting",
      "Simple Account",
      "Strategy",
      "Task",
      "Trading",
      "Transactions",
      "User",
      "Workflow",
    ];

    // Create a result array with objects containing the keyword and matching permissions
    const groupedPermissions = keywords.map((keyword) => ({
      keyword: keyword,
      matches: permissions.filter((permission) => {
        const codenameLower = permission.codename.toLowerCase();
        const keywordLower = keyword.toLowerCase().replace(/\s+/g, "_"); // Convert spaces to underscores
        return codenameLower.includes(keywordLower);
      }),
    }));

    return groupedPermissions;
  }

  const dummyData = [
    {
      group: 102,
      permission_name: "account_audit",
      permission_id: 1613,
      codename: "account_audit/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_audit_action",
      permission_id: 1612,
      codename: "account_audit/<slug:action>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_edit",
      permission_id: 1610,
      codename: "account_edit/<slug:acc_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_form",
      permission_id: 1622,
      codename: "account_form/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_detail",
      permission_id: 1604,
      codename: "account/<slug:acc_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "change_model",
      permission_id: 1619,
      codename: "account/<slug:acc_uuid>/change_model/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_detail",
      permission_id: 1611,
      codename: "account/<slug:acc_uuid>/date/<slug:date>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "donate_shares",
      permission_id: 1618,
      codename: "account/<slug:acc_uuid>/donate_shares/<int:amount>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_holdings",
      permission_id: 1606,
      codename: "account/<slug:acc_uuid>/holdings/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_holding",
      permission_id: 1607,
      codename: "account/<slug:acc_uuid>/holdings/<int:holding_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "invest_cash",
      permission_id: 1614,
      codename: "account/<slug:acc_uuid>/invest_cash/<int:amount>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_lot_detail",
      permission_id: 1608,
      codename: "account/<slug:acc_uuid>/lot_detail/<slug:ticker>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "manual_trade",
      permission_id: 1620,
      codename: "account/<slug:acc_uuid>/manual_trade/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "raise_cash",
      permission_id: 1615,
      codename: "account/<slug:acc_uuid>/raise_cash/<int:amount>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_gain_loss",
      permission_id: 1609,
      codename: "account/<slug:acc_uuid>/realized_gains/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "rebalance",
      permission_id: 1616,
      codename: "account/<slug:acc_uuid>/rebalance/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "restrictions",
      permission_id: 1624,
      codename: "account/<slug:acc_uuid>/restrictions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "tax_loss_harvest",
      permission_id: 1617,
      codename: "account/<slug:acc_uuid>/tax_loss_harvest/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_transactions",
      permission_id: 1621,
      codename: "account/<slug:acc_uuid>/transactions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Can add call and meeting",
      permission_id: 1569,
      codename: "add_callandmeeting",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "advisor",
      permission_id: 1544,
      codename: "advisor/",
      methods: {
        GET: false,
        PUT: true,
        POST: true,
        DELETE: false,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "advisor_reports",
      permission_id: 1691,
      codename: "advisor_reports/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing",
      permission_id: 1676,
      codename: "billing/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_accounts_audit",
      permission_id: 1677,
      codename: "billing/audit/accounts/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_multi_household_accounts",
      permission_id: 1682,
      codename: "billing/audit/multi_hh_accounts/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_audit_transactions",
      permission_id: 1683,
      codename: "billing/audit/transactions/<start_date>/<end_date>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_detail",
      permission_id: 1678,
      codename: "billing/<int:billing_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_files",
      permission_id: 1681,
      codename: "billing/<int:billing_id>/billing_files/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_households",
      permission_id: 1679,
      codename: "billing/<int:billing_id>/households/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_households",
      permission_id: 1680,
      codename: "billing/<int:billing_id>/newmoney/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "billing_reports",
      permission_id: 1684,
      codename: "billing/reports/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "generate_investment_policy",
      permission_id: 1598,
      codename: "cait-investment-policy/generate/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Cait",
      permission_id: 1671,
      codename: "cait/<type>/<slug:id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Can change call and meeting",
      permission_id: 1570,
      codename: "change_callandmeeting",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_co_invest_account",
      permission_id: 1728,
      codename: "clients/account/co-invest/<slug:account>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_account",
      permission_id: 1727,
      codename: "clients/account/<slug:account>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_account_transactions",
      permission_id: 1730,
      codename: "clients/account/<slug:account>/transactions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_info",
      permission_id: 1723,
      codename: "clients/client_info/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_ssn",
      permission_id: 1733,
      codename: "clients/client_ssn/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_documents",
      permission_id: 1725,
      codename: "clients/documents/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_household",
      permission_id: 1724,
      codename: "clients/household/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client",
      permission_id: 1721,
      codename: "clients/<int:client_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client",
      permission_id: 1722,
      codename: "clients/<int:client_id>/webuser/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_market_overview",
      permission_id: 1734,
      codename: "clients/market_overview/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_ticker_detail_screen",
      permission_id: 1735,
      codename: "clients/market_overview/<ticker>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_account_performance",
      permission_id: 1731,
      codename: "clients/performance/account/<slug:account>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_household_performance",
      permission_id: 1726,
      codename: "clients/performance/household/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_ticker_detail_screen",
      permission_id: 1732,
      codename: "clients/performance/<ticker>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "client_transactions",
      permission_id: 1729,
      codename: "clients/transactions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "assets_ready_13f",
      permission_id: 1718,
      codename: "compliance/13F/assets_ready/",
      methods: {
        GET: false,
        PUT: false,
        POST: false,
        DELETE: false,
      },
      active: true,
      denied: true,
    },
    {
      group: 102,
      permission_name: "submissions_13f",
      permission_id: 1720,
      codename: "compliance/13F/files/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "submissions_13f",
      permission_id: 1719,
      codename: "compliance/13F/submissions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "gift",
      permission_id: 1715,
      codename: "compliance/gift/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "gift_detail",
      permission_id: 1717,
      codename: "compliance/gift/<int:gift_id>",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "gift_summary",
      permission_id: 1716,
      codename: "compliance/gift_summary/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "note",
      permission_id: 1736,
      codename: "crm/notes/<slug:hh_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "note_tag",
      permission_id: 1737,
      codename: "crm/note_tag/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "custodians",
      permission_id: 1670,
      codename: "custodians/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Can delete call and meeting",
      permission_id: 1571,
      codename: "delete_callandmeeting",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "download_file",
      permission_id: 1666,
      codename: "download/<slug:bucket>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "file_management",
      permission_id: 1667,
      codename: "files_management/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "check_folder",
      permission_id: 1669,
      codename: "files_management/check_folder/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "folder_all_objects",
      permission_id: 1668,
      codename: "files_management/prefix_objects/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "firm_settings",
      permission_id: 1685,
      codename: "firm/settings/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "classify_fund",
      permission_id: 1636,
      codename: "hedge_fund/classify_fund/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "fund_classification_by_positions",
      permission_id: 1637,
      codename: "hedge_fund/fund_classification/positions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "fund_classification_by_date",
      permission_id: 1639,
      codename: "hedge_fund/fund_classification/<slug:type>/<slug:date>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "fund_classification_by_trades",
      permission_id: 1638,
      codename: "hedge_fund/fund_classification/trades/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "fund_models",
      permission_id: 1640,
      codename: "hedge_fund/models/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "holdings",
      permission_id: 1687,
      codename: "holdings/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_accounts_connection",
      permission_id: 1603,
      codename: "household_accounts_connection/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_contributions_distributions",
      permission_id: 1602,
      codename: "household/<slug:hh_uuid>/contribution_distribution/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_documents",
      permission_id: 1600,
      codename: "household/<slug:hh_uuid>/documents/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_tax",
      permission_id: 1599,
      codename: "household/<slug:hh_uuid>/tax/<slug:tax_type>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_transactions",
      permission_id: 1601,
      codename: "household/<slug:hh_uuid>/transactions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "overview",
      permission_id: 1658,
      codename: "investment_overview/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "all_market_commentaries",
      permission_id: 1660,
      codename: "investment_overview/commentary/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "awa_commentary",
      permission_id: 1661,
      codename: "investment_overview/commentary/<slug:commentary_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "strategies",
      permission_id: 1659,
      codename: "investment_overview/strategies/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_investment_policies",
      permission_id: 1597,
      codename: "investment-policy/<slug:hh_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "note_cashmin",
      permission_id: 1551,
      codename: "migration/note_trade_cashmin/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "models_changes",
      permission_id: 1628,
      codename: "model_changes/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "models",
      permission_id: 1626,
      codename: "model_names/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "models",
      permission_id: 1625,
      codename: "models/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "models_detail",
      permission_id: 1627,
      codename: "models/<int:id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "models_performance",
      permission_id: 1630,
      codename: "models_performance/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "trading_assets",
      permission_id: 1629,
      codename: "model_trade_restriction/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "money_movement",
      permission_id: 1695,
      codename: "money_movement/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "money_movement_request",
      permission_id: 1696,
      codename: "money_movement/request/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "request_journal_holdings",
      permission_id: 1697,
      codename: "money_movement/request_journal_holdings/<slug:acc_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "migrate_notes",
      permission_id: 1712,
      codename: "notes/migrate/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "notes_detail",
      permission_id: 1714,
      codename: "notes/<slug:cusip>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "notes_detail",
      permission_id: 1713,
      codename: "notes/<slug:cusip>/<slug:acc_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "user_notifications",
      permission_id: 1541,
      codename: "notifications/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "delete_notification",
      permission_id: 1543,
      codename: "notifications/<int:notification_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "notification_settings",
      permission_id: 1542,
      codename: "notifications/settings/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "onboarding",
      permission_id: 1643,
      codename: "onboarding/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "onboarding_detail",
      permission_id: 1644,
      codename: "onboarding/detail/<int:onboarding_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_performance",
      permission_id: 1642,
      codename: "performance/account/<slug:acc_uuid>/<slug:hh_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "household_performance",
      permission_id: 1641,
      codename: "performance/household/<slug:hh_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "performance_index_override",
      permission_id: 1686,
      codename: "performance_index_override/<slug:hh_uuid>/<slug:acc_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "private_fund_audit",
      permission_id: 1546,
      codename: "private_fund/mapping_audit/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "nav_data",
      permission_id: 1547,
      codename: "private_fund/nav_data/<slug:nav_account>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "private_fund_accounts",
      permission_id: 1549,
      codename: "private_fund/private_fund_accounts/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "private_fund_audit",
      permission_id: 1548,
      codename: "private_fund/unassigned_audit/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "update_fund_account_mapping",
      permission_id: 1550,
      codename: "private_fund/update_fund_account_mapping/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "query_builder",
      permission_id: 1693,
      codename: "query_builder/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "ticker_quote",
      permission_id: 1665,
      codename: "quotes/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "custodian_status",
      permission_id: 1741,
      codename: "reconciliation/custodian/status/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "reconciliation",
      permission_id: 1738,
      codename: "reconciliation/date/<slug:date>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_reconciliation",
      permission_id: 1739,
      codename: "reconciliation/<int:account_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "restore_account_reconciliation",
      permission_id: 1740,
      codename: "reconciliation/<int:account_id>/restore/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "performance",
      permission_id: 1742,
      codename: "reconciliation/performance/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "reports",
      permission_id: 1692,
      codename: "reports/<report_name>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "restricted_assets",
      permission_id: 1631,
      codename: "restricted_assets/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "trades",
      permission_id: 1623,
      codename: "restriction_report/<int:option>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "search_accounts",
      permission_id: 1553,
      codename: "search/accounts/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "search_households",
      permission_id: 1552,
      codename: "search/households/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "search_notes",
      permission_id: 1555,
      codename: "search/notes/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "search_tasks",
      permission_id: 1554,
      codename: "search/tasks/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "unassigned_account",
      permission_id: 1556,
      codename: "search/unassigned_account/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "securities",
      permission_id: 1672,
      codename: "securities/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "securities_billing_status",
      permission_id: 1673,
      codename: "securities/billing_status/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "securities_ignore_migration",
      permission_id: 1675,
      codename: "securities/ignore_migration/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "security_detail",
      permission_id: 1674,
      codename: "security_detail/<date>/<ticker>/<product_name>/<type>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "user_table_settings",
      permission_id: 1694,
      codename: "settings/table_settings/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "account_detail",
      permission_id: 1605,
      codename: "simple_account/<slug:acc_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "strategy",
      permission_id: 1662,
      codename: "strategy/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "strategy_report",
      permission_id: 1664,
      codename: "strategy/report/<slug:report_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "strategy_update",
      permission_id: 1663,
      codename: "strategy/updates/<slug:update_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task",
      permission_id: 1645,
      codename: "task/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task_categories",
      permission_id: 1651,
      codename: "task_categories/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "HH pending tasks",
      permission_id: 1654,
      codename: "task/households/<slug:type>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task",
      permission_id: 1646,
      codename: "task/<int:task_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task_messages",
      permission_id: 1650,
      codename: "task_messages/<int:task_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task_queues",
      permission_id: 1655,
      codename: "task/queues/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task_queue_detail",
      permission_id: 1656,
      codename: "task/queues/<int:queue_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task",
      permission_id: 1647,
      codename: "task/recurring/<int:recurring_task_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "related_task",
      permission_id: 1648,
      codename: "task/relations/<int:task_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task search",
      permission_id: 1657,
      codename: "task/search/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task",
      permission_id: 1653,
      codename: "task/stats",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task_list",
      permission_id: 1649,
      codename: "task_summary/filter/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "task_tag",
      permission_id: 1652,
      codename: "task_tag/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "trading_assets",
      permission_id: 1632,
      codename: "trading_assets/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "asset_sleeves_and_models",
      permission_id: 1634,
      codename: "trading_assets/<int:asset_id>/more_info/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "trading_model_detail",
      permission_id: 1635,
      codename: "trading_models/<int:model_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "trading_sleeves",
      permission_id: 1633,
      codename: "trading_sleeves/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "transactions",
      permission_id: 1688,
      codename: "transactions/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "transaction_edit",
      permission_id: 1689,
      codename: "transactions/edit/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "transaction",
      permission_id: 1690,
      codename: "transactions/<int:transaction_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "delete_users",
      permission_id: 1711,
      codename: "user/delete_users/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Detail",
      permission_id: 1703,
      codename: "user/detail/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "get_firm_employees",
      permission_id: 1702,
      codename: "user/firm_employees/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Household attached Users",
      permission_id: 1707,
      codename: "user/household/<slug:hh_uuid>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "user_info",
      permission_id: 1701,
      codename: "user/info/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "user_summary",
      permission_id: 1700,
      codename: "user/<int:user_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Management",
      permission_id: 1704,
      codename: "user/management/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Client View",
      permission_id: 1705,
      codename: "user/management/client_view/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "User Client Search",
      permission_id: 1706,
      codename: "user/management/search/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "new_user_notification",
      permission_id: 1709,
      codename: "user/new_user_notification/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "User profile picture",
      permission_id: 1708,
      codename: "user/profile_picture/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "user recent",
      permission_id: 1545,
      codename: "user_recent/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "user_uploaded_notification",
      permission_id: 1710,
      codename: "user/user_uploaded_notification/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Can view call and meeting",
      permission_id: 1572,
      codename: "view_callandmeeting",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "workflow_dashboard",
      permission_id: 1698,
      codename: "workflow/<name>/dashboard/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "remove_task_from_column",
      permission_id: 1699,
      codename: "workflow/remove_task/column/<int:column_id>/<int:task_id>/",
      methods: {
        GET: true,
        PUT: true,
        POST: true,
        DELETE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Cait Streaming Channels",
      permission_id: 1539,
      codename: "ws/cait/<slug:user_uuid>/",
      methods: {
        SEND: true,
        CONNECT: true,
        RECEIVE: true,
      },
      active: true,
      denied: false,
    },
    {
      group: 102,
      permission_name: "Trading Channels",
      permission_id: 1540,
      codename: "ws/trading_dashboard_feed/",
      methods: {
        SEND: true,
        CONNECT: true,
        RECEIVE: true,
      },
      active: true,
      denied: false,
    },
  ];

  const groupedResult = groupPermissionsByKeyword(dummyData);

  function splitDataByMatches(data) {
    // Calculate the total number of matches
    const totalMatches = data.reduce((sum, item) => sum + item.matches.length, 0);
  
    // Split the data into two groups with roughly equal numbers of matches
    const halfMatches = Math.floor(totalMatches / 2);
    let currentMatches = 0;
    const group1 = [];
    const group2 = [];
  
    for (const item of data) {
      if (currentMatches + item.matches.length <= halfMatches) {
        group1.push(item);
        currentMatches += item.matches.length;
      } else {
        group2.push(item);
      }
    }
  
    return [group1, group2];
  }
  
  const [group1, group2] = splitDataByMatches(groupedResult.flat());

  return (
    <Box sx={{ padding: "20px" }}>
   <Box
  sx={{
    display: "flex",
    gap: "20px",
    flexDirection: "row",
    flexWrap: "wrap",
  }}
>
  {[group1, group2].map((group, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "calc(50% - 10px)",
      }}
    >
      {group.map((item) => (
        <Paper key={item.keyword} sx={{padding: "10px", background: "#F8F8F8"}}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#212B36",
              marginBottom: "10px",
            }}
          >
            {item.keyword}
          </Typography>
          {item.matches.length > 0 ? (
            item.matches.map((permission, permIndex) => (
              <Accordion
                key={permIndex}
                elevation={0}
                expanded={expandedAccordion === permIndex}
                sx={{ boxShadow: "none !important" }}
              >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: 'gray',
                            transform: 'rotate(0deg)',
                          }}
                          onClick={() => handleAccordionToggle(permIndex)}
                        />
                      }
                      aria-controls={`panel${permIndex}-content`}
                      id={`panel${permIndex}-header`}
                      sx={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        minHeight: '45px !important',
                        height: '5px !important',
                        padding: '0px',
                        marginBottom: '0px',
                        borderBottom: '1px solid #ccc',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: '#212B36', pl: 1 }}
                        >
                          {permission.permission_name}
                        </Typography>

                        {/* <FormControlLabel
                          control={
                            <Switch
                              onChange={() => handleSwitchChange(permission, category)}
                              checked={permission.active}
                            />
                          }
                        /> */}
                      </Box>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails
                      sx={{ padding: '0px', margin: '0px', pl: 4 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'gray' }}>
                          View
                        </Typography>

                        <FormControlLabel
                          control={
                            <Switch
                              onChange={(event) => event.stopPropagation()}
                            />
                          }
                        />
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'gray' }}>
                          Update
                        </Typography>

                        <FormControlLabel
                          control={
                            <Switch
                              onChange={(event) => event.stopPropagation()}
                            />
                          }
                        />
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'gray' }}>
                          Delete
                        </Typography>

                        <FormControlLabel
                          control={
                            <Switch
                              onChange={(event) => event.stopPropagation()}
                            />
                          }
                        />
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'gray' }}>
                          Post
                        </Typography>

                        <FormControlLabel
                          control={
                            <Switch
                              onChange={(event) => event.stopPropagation()}
                            />
                          }
                        />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <Box sx={{ padding: '10px' }}>
                  <Typography>No data available</Typography>
                </Box>
              )}
            </Paper>
          ))}
        </Box>
      ))}
    </Box>
    </Box>
  );
};
export default AudioParamMap;
