import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
});

// squelette du document PDF
const MyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Stéphanie Paitre</Text>
        <Text style={styles.text}>Développeuse Front-End | React | JavaScript</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>📧 Email : stephaniepaitre@gmail.com</Text>
        <Text style={styles.text}>🌍 Portfolio : en attente</Text>
      </View>
    </Page>
  </Document>
);

// composant pour afficher le bouton de téléchargement
const DownloadCV = () => (
  <PDFDownloadLink document={<MyPDF />} fileName="Stephanie_Paitre_CV.pdf">
    {({ loading }) => (loading ? "Chargement..." : "Télécharger mon CV")}
  </PDFDownloadLink>
);

export default DownloadCV;
