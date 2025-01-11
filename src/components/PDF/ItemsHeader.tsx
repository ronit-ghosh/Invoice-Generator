import { StyleSheet, Text, View } from "@react-pdf/renderer"

const ItemsHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={{width: '20%'}}>Name</Text>
            <Text style={{width: '60%'}}>Description</Text>
            <Text style={{width: '6%'}}>Qty.</Text>
            <Text style={{width: '14%'}}>Price</Text>
        </View>
    )
}

export default ItemsHeader

const styles = StyleSheet.create({    
    container: {
        fontSize: "14px",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        textDecoration:'underline',
        marginBottom: 10
    },
})