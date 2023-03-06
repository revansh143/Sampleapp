import React  from 'react';
import bgcolors from '../config/bgcolors';
import { Text, View,ListView, Image } from "react-native";

import { FlatList } from 'react-native';

import { Cell, Separator, TableView } from 'react-native-tableview-simple';


export default  function HomeVew() {

  const [data, setData] =  React.useState([]);


    // let response =  fetch(
    //   'https://reactnative.dev/movies.json'
    // );
    // let json =  response.json();
    // console.log(json.movies)
    // this.setState({
    //   data: json.movies
    //  })
 //to catch the errors if any
  
 React.useEffect(() => {
  fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

    return (
        <TableView style={{ flex: 1 }}>
    <FlatList 
      data={data.movies}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item, separators }) => (
       // <Image style={styles.logo} source={require("../assets/snack-icon.png")}/>

       <View style={{width: "100%"}}>
       <View>
         <Image style ={{width:50,height:50}} source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}/>
         <Text  numberOfLines={1}>
           {item.title}
         </Text>
         <Text numberOfLines={1}>{item.releaseYear}</Text>
       </View>
     </View>
        // <Cell
        //   title={item.title}
        //   onPress={console.log}
        //   onHighlightRow={separators.highlight}
        //   onUnHighlightRow={separators.unhighlight}
        // />
      )}
      ItemSeparatorComponent={({ highlighted }) => (
        <Separator isHidden={highlighted} />
      )}
    />
  </TableView>
    )
}