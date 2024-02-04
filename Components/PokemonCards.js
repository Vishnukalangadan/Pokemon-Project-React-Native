import { View, Text, StyleSheet, Image, Platform } from "react-native";


const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};

export default function PokemonCard({ name,
    image,
    type,
    hp,
    moves,
    weaknesses }) {

    const { borderColor, emoji } = getTypeDetails(type);

    return (
        <View style={styles.card}>
            <View style={styles.nameConatainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}> 💖{hp}</Text>
            </View>

            <Image
                source={image}
                style={styles.image}
                accessibilityLabel={`${name} pokemon`}
                resizeMode="contain"
            />

            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.emoji}>{emoji}</Text>
                    <Text style={styles.type}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves:{moves.join(",")}</Text>
            </View>
            <View style={styles.weaknescontainer}>
                <Text style={styles.weaknessText}>Weaknesses: {weaknesses.join(",")}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 16,
        borderWidth: 2,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16
    },
    nameConatainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    hp: {
        fontSize: 22
    },
    type: {
        fontSize: 22,
        fontWeight: 'bold'

    },
    typeContainer: {
        marginBottom: 16,
        alignItems: 'center'

    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 3,
    },
    emoji: {
        fontSize: 30,
        marginRight: 12
    },
    movesContainer: {
        marginBottom: 16,

    },
    movesText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    weaknescontainer: {
        marginBottom: 8
    },
    weaknessText: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})