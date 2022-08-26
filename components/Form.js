import react, { Component } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

class Form extends Component {

    static defaultProps = {

        onAdd: () => {

        }
    }

    state = {

        text: ''
    }

    add = () => {
        const { state } = this;
        if (state.text) {

            this.props.onAdd(state.text)
            this.handleChange('')

        }

    }

    handleChange = (text) => {

        this.setState({ text })
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Digite aqui" value={this.state.text} onChangeText={this.handleChange} />
                <Button title="Adicionar" color="#000" onPress={this.add} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center'

    },
    input: {
        borderWidth: 1,
        width: 300,
        height: 50,
        borderRadius: 50,
        margin: 20,
        borderColor: '#c3c3c3',
        paddingLeft: 12,
    },
});

export default Form;