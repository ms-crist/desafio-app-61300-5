import { Pressable, StyleSheet, Text, Image } from "react-native";
import Card from "./Card";
import { MaterialCommunityIcons } from '@expo/vector-icons';



const CategoryItem = ({ category, navigation }) => {
  return (
    <Card style={{ marginVertical: 20}}>
      <MaterialCommunityIcons style={{marginLeft: 10}} name="monitor-cellphone" size={80} color="black" />
      <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    textAlignVertical: 'bottom',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    padding: 10,
    paddingTop: 30
  },
});
