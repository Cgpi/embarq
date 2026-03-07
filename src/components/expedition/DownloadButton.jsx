import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DownloadIcon from "@mui/icons-material/Download";

// Import PDFs
import finlandPDF from "../../assets/pdf/finland.pdf";
import georgiaPDF from "../../assets/pdf/georgia.pdf";
import k2PDF from "../../assets/pdf/k2k.pdf";
import romaniaPDF from "../../assets/pdf/romania.pdf";
import scotlandPDF from "../../assets/pdf/scotland.pdf";
import skoreaPDF from "../../assets/pdf/skorea.pdf";

const pdfMap = {
  finland: finlandPDF,
  georgia: georgiaPDF,
  k2k2026: k2PDF,
  romania: romaniaPDF,
  scotland: scotlandPDF,
  southkorea: skoreaPDF,
};

export default function DownloadPDFButton({ slug }) {
  const pdfUrl = pdfMap[slug];
  if (!pdfUrl) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#FCF5E4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pb: 8,   // vertical padding for section
       
      }}
    >
      <Button
        component="a"
        href={pdfUrl}
        download
        startIcon={<DownloadIcon />}
        sx={{
          px: 4,
          py: 1.2,
          borderRadius: "40px",
          textTransform: "none",
          fontWeight: 600,
          color: "#fff",
          background: "linear-gradient(180deg, #f6b94c, #e6a12d)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
          "&:hover": {
            background: "linear-gradient(180deg, #f7c15c, #e6a12d)",
            boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
          },
        }}
      >
        Download Brochure
      </Button>
    </Box>
  );
}