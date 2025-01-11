import { Document, Page, StyleSheet, Font } from "@react-pdf/renderer"
import Header from "./PDF/Header"
import Client from "./PDF/Client"
import ItemsHeader from "./PDF/ItemsHeader";
import Items from "./PDF/Items";
import Footer from "./PDF/Footer";
import Discount from "./PDF/Discount";

Font.register({ family: 'Poppins', src: '/fonts/Poppins-Regular.ttf' });
Font.register({ family: 'PoppinsBold', src: '/fonts/Poppins-Bold.ttf' });

const PDF = ({ billingValues, clientValues, totalAmount }: { billingValues: any, clientValues: any, totalAmount: any }) => {

  const { clientName,
    businessName,
    clientAddress,
    city,
    stateName,
    contact,
    date,
    dueDate,
    discount,
    terms } = clientValues
  // @ts-ignore
  totalAmount = billingValues.reduce((acc, item) => acc + parseInt(item.price), 0)

  return (
    <Document pageMode='fullScreen'>
      <Page size="A4" style={styles.page}>
        <Header />
        {/* @ts-ignore */}
        <Client
          clientName={clientName}
          businessName={businessName}
          clientAddress={clientAddress}
          city={city}
          stateName={stateName}
          contact={contact}
          date={date}
          dueDate={dueDate}
        />
        <ItemsHeader />
        {/* @ts-ignore */}
        {billingValues.map((item, index) => <Items item={item} key={index} />)}
        <Discount discount={discount} />
        <Footer terms={terms} totalAmount={totalAmount} />
      </Page>
    </Document>
  )
}

export default PDF

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 20,
    fontFamily: 'Poppins'
  },
})