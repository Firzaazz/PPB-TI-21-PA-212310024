import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: {
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
      }
    };
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Bio</Text>
        <Text>NPM: {this.state.bio.identity.npm}</Text>
        <Text>Nama: {this.state.bio.identity.firstname} {this.state.bio.identity.middlename} {this.state.bio.identity.lastname}</Text>
        <Text>Pendidikan:</Text>
        {this.state.bio.educations.map(education => (
          <Text key={education.id}>{education.school}</Text>
        ))}
        <Text>No. HP: {this.state.bio.mobile_phone}</Text>
        <Text>Email: {this.state.bio.email}</Text>
        <Text>Jenis Kelamin: {this.state.bio.gender}</Text>
        <Text>Tinggi Badan: {this.state.bio.tall_body} cm</Text>
        <Text>Berat Badan: {this.state.bio.weight_body} kg</Text>
      </View>
    );
  }
}

export default MyBio;