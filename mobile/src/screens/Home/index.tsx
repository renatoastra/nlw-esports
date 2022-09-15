import { useEffect, useState } from 'react';
import { Gamecard, GamecardProps } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';
import { Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [games, setGames] = useState<GamecardProps[]>([]);

    const navigation = useNavigation();

    function handleOpenGame({ id, title, bannerUrl }: GamecardProps) {
        navigation.navigate('game', { id, title, bannerUrl })
    }
    useEffect(() => {
        fetch('http://192.168.1.7:3333/games')
            .then(response => response.json())
            .then(data => setGames(data));
    }, []);
    return (
        <Background>

            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} />
                <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Gamecard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                    horizontal
                />

            </SafeAreaView>
        </Background>
    );
}