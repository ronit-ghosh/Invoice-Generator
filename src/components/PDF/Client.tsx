import { StyleSheet, View, Text } from "@react-pdf/renderer"
import { ClientInputs } from "../Inputs/ClientInputs"

const Client = ({ clientName,
    businessName,
    clientAddress,
    city,
    stateName,
    contact,
    date,
    dueDate }: ClientInputs) => {

    const fomattedDate = date.split(' ')[0] + ", " + date.split(' ')[1] + "-" + date.split(' ')[2] + "-" + date.split(' ')[3] || ''
    const fomattedDueDate = dueDate.split(' ')[0] + ", " + dueDate.split(' ')[1] + "-" + dueDate.split(' ')[2] + "-" + dueDate.split(' ')[3] || ''

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Bill to: {clientName}</Text>
                {/* <Text>Invoice: 0001</Text> */}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, }}>
                <View style={styles.left}>
                    <Text style={{ fontFamily: 'PoppinsBold' }}>Business name: {businessName}</Text>
                    <Text>Address: {clientAddress}</Text>
                    <Text>City: {city}</Text>
                    <Text>State: {stateName}</Text>
                    <Text>Contact no.: {contact}</Text>
                </View>
                <View style={styles.right}>
                    <Text>Date: {fomattedDate}</Text>
                    <Text>Due Date: {fomattedDueDate}</Text>
                </View>
            </View>

        </View>
    )
}

export default Client

const styles = StyleSheet.create({
    container: {
        fontSize: "13px",
        marginVertical: 14,
        borderBottom: 1,
        paddingBottom: 14
    },
    header: {
        flexDirection: 'row',
        fontSize: "12px",
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    left: {
        width: '50%'
    },
    right: {
        width: '50%',
        textAlign: 'right'
    }
})