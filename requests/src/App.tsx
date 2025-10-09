import UserInfo from "./components/user-info";
import UserList from "./components/user-list";
import UserNewForm from "./components/user-new";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();


export default function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
      <hr />
      <UserNewForm />
      <hr />
      <UserList />
    </QueryClientProvider>
  )
}
