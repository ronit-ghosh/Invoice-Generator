import { StyleSheet, Text, View } from "@react-pdf/renderer"

const Footer = ({ terms, totalAmount }: { terms: string, totalAmount: number }) => {
    const numberToWordsIndian = (num: number) => {
        const belowTwenty = [
            '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        ];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const places = ['', 'thousand', 'lakh', 'crore'];

        if (num === 0) return 'zero';

        const getWords: (n: number) => string = (n:number) => {
            if (n === 0) return '';
            if (n < 20) return belowTwenty[n] + ' ';
            if (n < 100) return tens[Math.floor(n / 10)] + ' ' + belowTwenty[n % 10] + ' ';
            return belowTwenty[Math.floor(n / 100)] + ' hundred ' + getWords(n % 100);
        };

        let result = '';
        let placeIndex = 0;

        while (num > 0) {
            let chunk = 0;

            // Indian numbering: First 3 digits, then 2 digits per place.
            if (placeIndex === 0) {
                chunk = num % 1000; // First group of 3 digits
                num = Math.floor(num / 1000);
            } else {
                chunk = num % 100; // Next groups of 2 digits
                num = Math.floor(num / 100);
            }

            if (chunk > 0) {
                result = getWords(chunk) + places[placeIndex] + ' ' + result;
            }

            placeIndex++;
        }

        return result.trim();
    };

    const inWords = totalAmount ? numberToWordsIndian(totalAmount) : ''

    return (
        <>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={{ fontFamily: 'PoppinsBold' }}>Terms & Conditions:</Text>
                    <Text>{terms}</Text>
                </View>
                <View style={styles.right}>
                    <Text>Total: ₹ {totalAmount}</Text>
                    <Text style={{ fontSize: '10px', textTransform: "capitalize" }}>Total (in words): {inWords}</Text>
                </View>
            </View>
            <Text style={{ fontSize: "10px", marginTop: 5 }}>
                <Text style={{ fontFamily: 'PoppinsBold', color: 'red' }}>*</Text>
                This invoice is not valid without the company's official seal.
            </Text>
        </>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        fontSize: "12px",
        flexDirection: 'row',
        height: 110,
        marginTop: 20
    },
    left: {
        width: '60%',
        height: '100%',
        backgroundColor: '#fa9a57',
        justifyContent: "center",
        paddingHorizontal: 14
    },
    right: {
        width: '40%',
        height: '100%',
        textAlign: 'right',
        backgroundColor: '#f97316',
        justifyContent: "center",
        paddingHorizontal: 14,
        fontSize: '14px'
    },
})