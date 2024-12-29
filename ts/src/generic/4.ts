/*
 Task:
 Use generics and interfaces to fix the error in the following classes:
*/

// Solution
interface PageProps {
  title: string;
}
class Component<T> {
  constructor (public props:T) {
  }
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

// Example Usage:
const page = new Page({title: "My title"});
page.pageInfo();
export {};