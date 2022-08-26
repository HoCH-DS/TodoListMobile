import react, { Component } from "react";
import { Button, FlatList, View, Text, StyleSheet } from "react-native";

class TodoList extends Component {

    //Lista estatica para teste
    static defaultProps = {

        list: [],

        onRemove: () => {

        }

    }

    //função que controla estrutura da lista(id vs item)
    handleRow = ({ item, index }) => {

        return (
            <View style={styles.container} >            
                <Text style={styles.text}>
                    <span style={{color:"#666", fontSize: 20}}> {this.formatListNumber(index)}</span>
                    <span style={{color:"#666", fontSize: 20, marginRight: 20}}> - </span>
                    <span style={{color:"#000", fontSize: 15}}> {item.text}</span>
                </Text>
                <Button title="delete" color="#000" onPress={() => this.props.onRemove(item)} />
            </View>

        )
    }

    //formata id baseado na posição do array
    formatListNumber(number) {

        const digito = 2;

        return ('0'.repeat(digito) + (number + 1)).slice(-digito)

    }

    render() {
        const { props } = this;
        const keyExtractor = item => item.id;
        return (

            <View>
                {/* estrutura da lista */}
                <FlatList
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#eee',
        alignItems: 'center',

    },
    text: {
        flex: 1,
        flexDirection: "row"
    },

});

export default TodoList;