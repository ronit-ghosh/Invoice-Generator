import { StyleSheet, Text, View } from "@react-pdf/renderer"

const Discount = ({ discount }: { discount: string }) => {
    return (
        <View style={styles.container}>
            <Text style={{ width: '70%' }}></Text>
            <Text style={{ width: '16%', overflow: 'hidden', paddingHorizontal: 5 }}>Discount</Text>
            <Text style={{ width: '14%', overflow: 'hidden', paddingHorizontal: 5 }}>₹{discount}</Text>
        </View>
    )
}

export default Discount

const styles = StyleSheet.create({
    container: {
        fontSize: "12px",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        paddingVertical: 5,
        borderBottom: "1px solid #ddd"
    },
})