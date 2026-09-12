interface INotification {
  send(message: string): void
}

// abstract class Notification {
//   abstract send(message: string): void
// }

class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Email... ${message}`)
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SMS... ${message}`)
  }
}

class PushNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Push notification... ${message}`)
  }
}

const notifications: INotification[] = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification()
];

for (const notification of notifications) {
  notification.send("Your order has been shipped");
}