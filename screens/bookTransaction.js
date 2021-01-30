import React from 'react';
import { Text, View, Image } from 'react-native'

export default class BookTransaction extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Issue or Return</Text>
                <Image
                    source={require('../assets/book.png')}
                />
            </View>
        )
    }
}