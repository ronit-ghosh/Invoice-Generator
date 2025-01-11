import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const Header = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                src="https://res.cloudinary.com/drynqkitl/image/upload/v1736337408/ignite_sgxez4.png" />
        </View>
        <View style={styles.address}>
            <Text style={styles.companyName}>Ignite Studios</Text>
            <Text>Address: Serampore / Chinsurah</Text>
            <Text>District: Hooghly</Text>
            <Text>State: West Bengal</Text>
            <Text>Contact Number: 89819 85323 / 70032 65196</Text>
        </View>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#f97316",
        padding: 10,
        overflow: 'hidden',
        height: 140
    },
    logoContainer: {
        objectFit: 'cover',
        width: '30%',
        padding: 5
    },
    logo: {
        objectFit: 'cover',
    },
    address: {
        fontSize: "12px",
        width: "55%",
    },
    companyName: {
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: 'PoppinsBold',
        textTransform: "uppercase",
    }
});