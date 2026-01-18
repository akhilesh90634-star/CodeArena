import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Coding/CodingPage.module.css";

const languages = ["Python", "Java", "C++", "JavaScript"];

const columns = [
  { id: "summary", label: "Question Summary", minWidth: 400 },
  { id: "testCases", label: "Test Case Count", minWidth: 80, align: "center" },
  { id: "lang", label: "Language", minWidth: 80, align: "center" },
  { id: "action", label: "Actions", minWidth: 100, align: "center" },
];

const sampleRows = Array(8).fill({
  summary:
    "The Library’s Fine Calculator Story: Alice manages the library and wants a way to calculate...",
  testCases: "3",
  lang: "Python",
  action: "Solve",
});

export default function Codingpage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [hovered, setHovered] = useState(null);

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        <span className={styles.red}>Coding</span>{" "}
        <span className={styles.blue}>Questions</span>
      </h1>

      {/* FILTERS */}
      <div className={styles.filters}>
        <TextField placeholder="Search…" variant="outlined" fullWidth />

        <TextField select displayEmpty defaultValue="" sx={{ width: 300 }}>
          <MenuItem disabled value="">
            Language
          </MenuItem>
          {languages.map((l, idx) => (
            <MenuItem key={idx} value={l}>
              {l}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {/* TABLE */}
      <Paper className={styles.tableWrapper}>
        <TableContainer className={styles.tableContainer}>
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#000000" }}>
                {columns.map((col) => (
                  <TableCell
                    key={col.id}
                    align={col.align}
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "30px",
                      fontWeight: 600,
                      backgroundColor: "#000000",
                      borderRight: "1px solid #7C7C7C",
                      minWidth: col.minWidth,
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {sampleRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow hover key={i}>
                    <TableCell>{row.summary}</TableCell>
                    <TableCell align="center">{row.testCases}</TableCell>
                    <TableCell align="center">{row.lang}</TableCell>
                    <TableCell align="center">
                      <img
                        src={
                          hovered === i
                            ? "/Solvebulebuttonhover.png"
                            : "/Solveredbutton.png"
                        }
                        alt="solve"
                        className={styles.solveImg}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => navigate("/Codingquestion")}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sampleRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, p) => setPage(p)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(+e.target.value);
            setPage(0);
          }}
        />
      </Paper>
    </div>
  );
}
