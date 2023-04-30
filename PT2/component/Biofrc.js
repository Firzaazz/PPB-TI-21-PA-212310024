import React from 'react';
import { View, Text } from 'react-native';

function MyBio() {
  const bio = {
    identity: {
      npm: 212310056,
      firstname: "Firza",
      middlename: "",
      lastname: "Azzhara",
    },
    educations: [
      { id: 1, school: "SDN purbasari" },
      { id: 2, school: "SMP Pesat" },
      { id: 3, school: "SMK informatika Pesat" },
    ],
    mobile_phone: "0812345679",
    email: "212310024@student.ibik.ac.id",
    gender: 'M',
    tall_body: 160,
    weight_body: 70
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Bio</Text>
      <Text>NPM: {bio.identity.npm}</Text>
      <Text>Nama: {bio.identity.firstname} {bio.identity.middlename} {bio.identity.lastname}</Text>
      <Text>Pendidikan:</Text>
      {bio.educations.map(education => (
        <Text key={education.id}>{education.school}</Text>
      ))}
      <Text>No. HP: {bio.mobile_phone}</Text>
      <Text>Email: {bio.email}</Text>
      <Text>Jenis Kelamin: {bio.gender}</Text>
      <Text>Tinggi Badan: {bio.tall_body} cm</Text>
      <Text>Berat Badan: {bio.weight_body} kg</Text>
    </View>
  );
}

export default MyBio;