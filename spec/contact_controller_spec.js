const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

  beforeEach((done) => {
     this.book = new ContactController();

  sequelize.sync({force: true}).then((res) => {
     done();
   })
   .catch((err) => {
     done();
   });
  });


  it("should be defined", () => {
    expect(ContactController).toBeDefined();
  })




  describe("#addContact()", () => {

    it("should add a single contact into the book", (done) => {
      this.book.addContact("Lindsey", "001-101-1010", "jh@gmail.com")
      .then((contact) => {
        expect(contact.name).toBe("Lindsey");
        expect(contact.phone).toBe("001-101-1010");
        expect(contact.email).toBe("jh@gmail.com");
        done();
      })
      .catch((err) => {
        done();
      });
    });



  });






})
