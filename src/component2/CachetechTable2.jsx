import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RefreshIcon from "@mui/icons-material/Refresh";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  useSort,
} from "@table-library/react-table-library/sort";
import Tabledata from "./Tabledata";

const CachetechTable2 = () => {
  const data = Tabledata().props.data; 

  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data.nodes);
  const [zoomLevel, setZoomLevel] = React.useState(1);

  const baseTheme = getTheme();
  const customTheme = {
    ...baseTheme,
    rowheader: {
      position: "fixed",
    },
  };
  const theme = useTheme(customTheme);

  const handleSortChange = (action, state) => {
    console.log("Sorting action:", action);
    console.log("Updated sorting state:", state);
  };

  const sort = useSort(
    filteredData,
    {
      onChange: handleSortChange,
    },
    {
      sortIcon: {
        margin: "0px",
        iconDefault: <UnfoldMoreOutlinedIcon fontSize="small" />,
        iconUp: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
        iconDown: <KeyboardArrowDownOutlinedIcon fontSize="small" />,
      },
      sortFns: {
        HOUSEHOLD_ID: (array) =>
          array.sort((a, b) => a.household_id - b.household_id),
        NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        ESTIMATED_VALUE: (array) =>
          array.sort((a, b) => a.estimated_value - b.estimated_value),
        BD: (array) => array.sort((a, b) => a.BD.localeCompare(b.BD)),
        WA: (array) => array.sort((a, b) => a.WA.localeCompare(b.WA)),
        DATE_CREATED: (array) =>
          array.sort(
            (a, b) => new Date(a.date_created) - new Date(b.date_created)
          ),
        SEGMENT: (array) =>
          array.sort((a, b) => a.segment.localeCompare(b.segment)),
        PROGRESS: (array) =>
          array.sort((a, b) => a.progress.localeCompare(b.progress)),
        LAST_UPDATE: (array) =>
          array.sort(
            (a, b) => new Date(a.last_update) - new Date(b.last_update)
          ),
      },
    }
  );

  const COLUMNS = [
    {
      label: "Household ID",
      renderCell: (item) => item.household_id,
      sort: { sortKey: "HOUSEHOLD_ID" },
      resize: true,
    },
    {
      label: "Name",
      renderCell: (item) => item.name,
      sort: { sortKey: "NAME" },
      resize: true,
    },
    {
      label: "Estimated Value",
      renderCell: (item) => item.estimated_value,
      sort: { sortKey: "ESTIMATED_VALUE" },
      resize: true,
    },
    {
      label: "BD",
      renderCell: (item) => item.BD,
      sort: { sortKey: "BD" },
      resize: true,
    },
    {
      label: "Wealth Advisor",
      renderCell: (item) => item.WA,
      sort: { sortKey: "WA" },
      resize: true,
    },
    {
      label: "Date Created",
      renderCell: (item) => item.date_created,
      sort: { sortKey: "DATE_CREATED" },
      resize: true,
    },
    {
      label: "Segment",
      renderCell: (item) => item.segment,
      sort: { sortKey: "SEGMENT" },
      resize: true,
    },
    {
      label: "Progress",
      renderCell: (item) => item.progress,
      sort: { sortKey: "PROGRESS" },
      resize: true,
    },
    {
      label: "Last Update",
      renderCell: (item) => item.last_update,
      sort: { sortKey: "LAST_UPDATE" },
      resize: true,
    },
  ];

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.nodes.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(query)
      )
    );

    setFilteredData(filtered);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Active Onboarding (17)
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { fontWeight: "bold", fontSize: "16px" },
              }}
            />
            <IconButton onClick={handleZoomIn}>
              <ZoomInIcon />
            </IconButton>
            <IconButton onClick={handleZoomOut}>
              <ZoomOutIcon />
            </IconButton>
            <IconButton onClick={handleResetZoom}>
              <RefreshIcon />
            </IconButton>
          </div>
        </div>
        <div
          style={{
            height: "300px",
            overflowY: "auto",
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top left",
          }}
        >
          <CompactTable
            columns={COLUMNS}
            data={{ nodes: filteredData }}
            theme={theme}
            sort={sort}
            layout={{ isDiv: true, fixedHeader: true }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CachetechTable2;
