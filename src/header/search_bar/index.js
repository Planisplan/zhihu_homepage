import React from 'react';
import styles from './index.module.css'

const SearchButton = ()=> <button aria-label="搜索" type="submit" style={{backgroundColor:'transparent', border:'none', marginLeft:'-30px'}}><span style={{display: 'inline-flex', alignItems: 'center'}}>​<svg fill="#8590a6" viewBox="0 0 24 24" width="18" height="18"><path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fillRule="evenodd"></path></svg></span></button>


class SearchBar extends React.Component {

	render(){
		return (<form className={styles.wrapper}>
			<input type='text' className={styles.searchBar} onFocus={this.props.show} onBlur={this.props.hide} style={{width:this.props.status?'400px':'326px',transition:'200ms'}}/>
			<SearchButton />
			<input type='submit' className={styles.askButton} style={{visibility:this.props.status?'hidden':'inherit',transform:`scale(${this.props.status?0:1})`,transition:'visibility 0s, transform 300ms'}}/>
		</form>)
	}
}

export default SearchBar