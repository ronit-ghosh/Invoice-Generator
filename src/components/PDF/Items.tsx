import { StyleSheet, Text, View } from "@react-pdf/renderer"

const Items = ({ item, }: { item: any }) => {
    return (
        <View style={styles.container}>
            <Text style={{ width: '20%', overflow: 'hidden', paddingHorizontal: 5 }}>{item.name}</Text>
            <Text style={{ width: '60%', overflow: 'hidden', paddingHorizontal: 5 }}>{item.desc}</Text>
            <Text style={{ width: '6%', overflow: 'hidden', paddingHorizontal: 5 }}>{item.quantity}</Text>
            <Text style={{ width: '14%', overflow: 'hidden', paddingHorizontal: 5 }}>₹{item.price}</Text>
        </View>
    )
}

export default Items

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