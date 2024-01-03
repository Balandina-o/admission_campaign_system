export default class AdmissionCampaign {
  getSpecialities() {
    return [{
      id: 1,
      name: "Спец.1",
      cypher: "123",
      type: "кадр",
      candidates: [
        { id: 1, name: "Иванов Иван Иванович", group: "ПИ-426" },
        { id: 2, name: "Иванов2 Иван2 Иванович2", group: "ПИ-427" }
      ]
    }, {
      id: 2,
      name: "Спец.2",
      cypher: "1234",
      type: "кадр",
      candidates: [
        { id: 3, name: "Иванов3 Иван3 Иванович3", group: "ПИ-428" },
        { id: 4, name: "Иванов4 Иван4 Иванович4", group: "ПИ-429" }
      ]
    }]
  }

  getDirections() {
    return [{
      id: 1, name: "Напр. 1", cypher: "123", acronym: "AAA"
    }, {
      id: 2, name: "Напр. 2", cypher: "124", acronym: "AAA"
    }]
  }
}
