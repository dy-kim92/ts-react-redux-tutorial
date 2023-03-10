//  사용자정보를 불러오기 위한 컴포넌트
import React, { FormEvent, useState, ChangeEvent } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
      <button type="submit">조회</button>
    </form>
  );
}

export default GithubUsernameForm;