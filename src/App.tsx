import './App.css';
import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';
import Result from '@/components/Result';

export default function App() {
  return (
    <>
      <Header heading="Harlem Booking System" />
      <SearchForm />
      <Result />
    </>
  );
}
