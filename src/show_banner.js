import figlet from "figlet";

// Print banner
const showBanner = () => {
  figlet(
    "Auto Mail",
    {
      font: "Big Money-ne",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }

      console.log(`\n\n ${data}`);
      console.log(
        `1.0.0                                              Gabriel Barbosa (Mr.Nobody)
        \n`
      );
    }
  );
};

export default showBanner;