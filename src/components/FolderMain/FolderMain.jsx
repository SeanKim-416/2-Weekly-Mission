import styles from './FolderMain.module.css';
import SearchBar from '../atoms/SearchBar/SearchBar';
import CardList from '../CardList/CardList';
import LinkInput from '../atoms/LinkInput/LinkInput';
import FolderList from '../atoms/FolderList/FolderList';
import Folder from '../../folder-mock.json';
import FolderData from '../../list-mock.json';
import FolderTitle from '../atoms/FolderTitle/FolderTitle';
import { useState } from 'react';
function FolderMain() {
  const { folder } = Folder;
  const { data } = FolderData;

  const [selectedId, setSelectedId] = useState('all');
  const [folderTitle, setFolderTitle] = useState('전체');

  const handleClick = (e) => {
    setSelectedId(e.target.id);
    setFolderTitle(e.target.textContent);
  };

  return (
    <main>
      <LinkInput />
      <article className={styles.article}>
        <SearchBar />
        <FolderList data={data} selectedId={selectedId} onClick={handleClick} />
        <FolderTitle title={folderTitle} selectedId={selectedId} />
        <CardList links={folder.links} />
      </article>
    </main>
  );
}

export default FolderMain;
