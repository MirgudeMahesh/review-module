// DrillDownTable.jsx
import React, { useState } from "react";
import { useRole } from "./RoleContext";
import { useNavigate } from "react-router-dom";
import "../styles.css";



const DrillDownTable = ({ childrenData, level }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const [overlay, setOverlay] = useState({
    open: false,
    loading: false,
    table2: null,   // Pivot table only
    territory: null,
  });

  const { setName, setUserRole } = useRole();
  const navigate = useNavigate();

  const toggleRow = (name) => setExpandedRows((p) => ({ ...p, [name]: !p[name] }));

  const styles = {
    th: { backgroundColor: "#eeeeee", padding: "8px 12px", textAlign: "left" },
    td: { padding: "8px 12px", border: "1px solid black", verticalAlign: "top" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "10px", fontSize: "13px" },
    row: { cursor: "pointer" },
    questionMark: { marginLeft: 6, color: "black", cursor: "pointer", fontWeight: "bold" },
    overlayBg: {
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center",
      alignItems: "center", zIndex: 2000
    },
    overlayContent: {
      backgroundColor: "#fff", padding: 20, borderRadius: 8, width: "90%", maxHeight: "85%",
      overflow: "auto", boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
    },
    overlayHeader: {
      display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15
    },
    closeBtn: { cursor: "pointer", fontSize: 20, color: "#555" },
    subtle: { margin: 0, color: "#666", fontWeight: 400, fontSize: 12 },
  };

  const openprofile = (name) => {
    // const selectedChild = childrenData[name];
    // if (selectedChild?.territory) localStorage.setItem("territory", selectedChild.territory);
    // if (selectedChild?.role) setUserRole(selectedChild.role);
    // setName(name);
    // navigate(`/profile/${name}/Review`);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSalesValue = (sales) => {
    if (Array.isArray(sales)) {
      const total = sales.reduce((s, item) => s + (item.sales || 0), 0);
      return Number(total).toFixed(2);
    }
    return sales ? Number(sales).toFixed(2) : "-";
  };

  // Fetch only Pivot table
  const openPivotOverlay = async (territory) => {
    setOverlay((o) => ({ ...o, open: true, loading: true, territory }));
    try {
      const res = await fetch(`https://review-module-backend-3.onrender.com/getTable2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ territory }),
      });
      const data = await res.json();
      setOverlay((o) => ({ ...o, loading: false, table2: data?.results || [] }));
    } catch (e) {
      console.error("openPivotOverlay error", e);
      setOverlay((o) => ({ ...o, loading: false, table2: [] }));
    }
  };

  // Helper to compute Stockist columns in pivot
  const getStockistColumns = (rows) => {
    const cols = new Set();
    (rows || []).forEach((r) => {
      Object.keys(r || {}).forEach((k) => {
        if (k !== "ProductName" && k !== "GrandTotal") cols.add(k);
      });
    });
    return Array.from(cols).sort();
  };

  return (
    <>
      {/* main drilldown table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name (Level {level})</th>
            <th style={styles.th}>Efficiency(%)</th>
            <th style={styles.th}>Sales</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(childrenData).map(([name, child]) => {
            const isLeaf = !child.children || Object.keys(child.children).length === 0;

            return (
              <React.Fragment key={name}>
                <tr
                  style={{
                    ...styles.row,
                    backgroundColor: child.amount <= 50 ? "rgb(255, 120, 120)" : "transparent",
                  }}
                  onClick={() => toggleRow(name)}
                >
                  <td style={styles.td}>
                    {level === 1 ? (
                      <span className="profile-button-disabled">{name}</span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openprofile(name);
                        }}
                        className="profile-button"
                      >
                        {name}
                      </button>
                    )}
                  </td>
                  <td style={styles.td}>{child.amount}</td>
                  <td style={styles.td}>
                    {getSalesValue(child.sales)}
                    {isLeaf && child.territory && (
                      <span
                        title="Show Pivot Table"
                        style={styles.questionMark}
                        onClick={(e) => {
                          e.stopPropagation();
                          openPivotOverlay(child.territory);
                        }}
                      >
                        ?
                      </span>
                    )}
                  </td>
                </tr>

                {expandedRows[name] &&
                  child.children &&
                  Object.keys(child.children).length > 0 && (
                    <tr className="nested">
                      <td colSpan="3" style={{ paddingLeft: 30 }}>
                        <DrillDownTable childrenData={child.children} level={level + 1} />
                      </td>
                    </tr>
                  )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* Overlay with Pivot table only */}
      {overlay.open && (
        <div style={styles.overlayBg}>
          <div style={styles.overlayContent}>
            <div style={styles.overlayHeader}>
              <div>
                <h3 style={{ margin: 0 }}>
                  Pivot Table — {overlay.territory || ""}
                </h3>
                <p style={styles.subtle}>
                  Format: <strong>Product Name × Stockists + Grand Total</strong>
                </p>
              </div>
              <span
                style={styles.closeBtn}
                onClick={() =>
                  setOverlay({ open: false, loading: false, table2: null, territory: null })
                }
              >
                ×
              </span>
            </div>

            {overlay.loading ? (
              <div>Loading…</div>
            ) : !overlay.table2 || overlay.table2.length === 0 ? (
              <div>No data available.</div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Row Labels</th>
                      {getStockistColumns(overlay.table2).map((s) => (
                        <th key={s} style={styles.th}>{s}</th>
                      ))}
                      <th style={styles.th}>Grand Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overlay.table2.map((row, idx) => {
                      const stockCols = getStockistColumns(overlay.table2);
                      return (
                        <tr key={idx}>
                          <td style={styles.td}>{row.ProductName || "-"}</td>
                          {stockCols.map((s) => (
                            <td key={s} style={styles.td}>
                              {Number(row[s] ?? 0).toLocaleString()}
                            </td>
                          ))}
                          <td style={styles.td}>
                            {Number(row.GrandTotal ?? 0).toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DrillDownTable;
