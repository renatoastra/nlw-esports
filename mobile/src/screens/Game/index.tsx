import { useEffect, useState, } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';

interface RouteParams {
    id: string;
    title: string;
    bannerUrl: string;
}

export function Game() {
    const [duos, setDuos] = useState([]);
    const route = useRoute();
    const game = route.params as RouteParams;
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    useEffect(() => {
        fetch(`http://192.168.1.7:3333/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuos(data));
    }, [])
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}

                        />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.right} ></View>
                </View>

                <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList data={duos} keyExtractor={item => item.id} renderItem={({ item }) => (
                    <DuoCard
                        onConnect={() => { }} data={item} />
                )}
                    horizontal
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContainer]}
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerList}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>Nenhum anunùncio encontrado ainda. :(</Text>
                    )} />

            </SafeAreaView>
        </Background>
    );
}