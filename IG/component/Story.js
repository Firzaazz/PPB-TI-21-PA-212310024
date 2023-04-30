import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Users } from './Data';

const Story = ({ name, imageUrl }) => {
  return (
    <View style={{ marginRight: 10 }}>
      <Image source={{ uri: imageUrl }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      <Text style={{ textAlign: 'center' }}>{name}</Text>
    </View>
  );
};

const StoryList = () => {
  const onePieceCharacters = [
    { name: 'Firza', imageUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20200708/brookonepiece-4188aa14dcf399a663cf3581140c9013.jpg' },
    { name: 'R Zoro', imageUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20191120/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f.jpg' },
    { name: 'Nami', imageUrl: 'https://images2.alphacoders.com/127/1277702.jpg' },
    { name: 'Usopp', imageUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20191120/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f.jpg' },
    { name: 'Sanji', imageUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20191120/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f.jpg' },
    { name: 'Chopper', imageUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20191120/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f.jpg' },
    { name: 'Nico Robin', imageUrl: 'https://images2.alphacoders.com/127/1277702.jpg' },
    { name: 'Franky', imageUrl: 'https://cdn.idntimes.com/content-images/duniaku/post/20191120/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f.jpg' },
    { name: 'Brook', imageUrl: 'https://i.pinimg.com/564x/71/ee/77/71ee77a49e6a55537cbb11f537ef73f6.jpg' },
  ];

  return (
    <ScrollView horizontal contentContainerStyle={{ padding: 10 }} showsHorizontalScrollIndicator={false}>
      {onePieceCharacters.map((character) => (
        <Story key={character.name} name={character.name} imageUrl={character.imageUrl} />
      ))}
    </ScrollView>
  );
};

export default StoryList;
