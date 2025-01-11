import { Font, PDFDownloadLink } from "@react-pdf/renderer"
import "./App.css"
import { ThemeProvider } from "./components/theme-provider";
import InputPage from "./components/InputPage";
import ThemeToggle from "./components/toggle-theme";
import { useRecoilValue } from "recoil";
import { billingInputAtom, clientInputAtom, totalAmountAtom } from "./store/atom";
import PDF from "./components/PDF";
import { Button } from "./components/ui/button";

Font.register({ family: 'Poppins', src: 'src/fonts/Poppins-Regular.ttf' });
Font.register({ family: 'PoppinsBold', src: 'src/fonts/Poppins-Bold.ttf' });

const App = () => {

  const clientValues = useRecoilValue(clientInputAtom)
  const billingValues = useRecoilValue(billingInputAtom)
  const totalAmount = useRecoilValue(totalAmountAtom)

  const saveName = clientValues.saveName
  const PDFNAME = !saveName ? 'Ignite-Invoice' : saveName

  return (
    <>
      <ThemeProvider>
        <div className="h-screen w-full flex flex-col">
          <InputPage />
          <PDFDownloadLink
            className="mx-auto absolute bottom-5 right-5"
            document={<PDF clientValues={clientValues} billingValues={billingValues} totalAmount={totalAmount} />}
            fileName={`${PDFNAME}.pdf`}>
            <Button>Download</Button>
          </PDFDownloadLink>
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
