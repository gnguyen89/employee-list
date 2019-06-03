import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserById } from 'store/user/selectors';
import { addUser, editUser } from 'store/user/actions';

import Button from 'components/molecules/Button';
import ButtonIcon from 'components/molecules/ButtonIcon';

import css from './editUser.module.scss';

const PROFILE_IMAGE = [{
  value: 'None',
  label: 'none',
}];

const ROLES = [{
  value: 'Admin',
  label: 'Admin',
},
{
  value: 'Employee',
  label: 'Employee',
}];

const TEAM = [{
  value: 'Creative',
  label: 'Creative',
},
{
  value: 'Management',
  label: 'Management',
},
{
  value: 'FAA',
  label: 'Finance & Asset',
}];

function FormInput({ label, value, placeholder, onChange }) {
  return (
    <div className={css.input}>
      <div>{label}</div>
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

function FormSelect({ label, value, options, placeholder, onChange }) {
  return (
    <div className={css.select}>
      <div>{label}</div>
      <select onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o.label} value={o.value} selected={o.value === value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function EditUser({ user, isCreate, addUser, editUser, onCancel }) {
  const [userState, setUserState] = React.useState({});

  React.useEffect(() => {
    user.name ? setUserState(user) : setUserState({});
  }, [user])

  const handleSubmit = React.useCallback((data) => {
    isCreate ? addUser(data) : editUser(data);
  }, [addUser, editUser, userState]);

  return (
    <div className={css.editUser}>
      {!isCreate && <div className={css.close} onClick={onCancel}><ButtonIcon className={css.closeIcon} iconClass={css.icon} icon="times" /></div>}
      <div className={css.form}>
        <FormSelect label="Profile image" options={PROFILE_IMAGE} placeholder="Please select a profile image" onChange={(e) => setUserState(Object.assign({}, userState, { photoUrl: e.target.value }))} />
        <FormInput label="Name" placeholder="Enter name" value={userState.name} onChange={(e) => setUserState(Object.assign({}, userState, { name: e.target.value }))} />
        <FormInput label="Email address" placeholder="Enter email" value={userState.email} onChange={(e) => setUserState(Object.assign({}, userState, { email: e.target.value }))} />
        <FormSelect label="Role" options={ROLES} placeholder="Please select a role" value={userState.role} onChange={(e) => setUserState(Object.assign({}, userState, { role: e.target.value }))} />
        <FormSelect label="Team" options={TEAM} placeholder="Please select a team" value={userState.team} onChange={(e) => setUserState(Object.assign({}, userState, { team: e.target.value }))} />
        <FormInput label="Address" placeholder="Enter address" value={userState.address} onChange={(e) => setUserState(Object.assign({}, userState, { address: e.target.value }))} />
      </div>
      <div className={css.foot}>
        {isCreate ?
          <Button variant="success" onClick={() => handleSubmit(userState)}>Add employee</Button> :
          <Button variant="success" onClick={() => handleSubmit(userState)}>Edit employee</Button>
        }
      </div>
    </div>
  );
}

EditUser.propTypes = {
  user: PropTypes.object,
  isCreate: PropTypes.bool,
};

EditUser.defaultProps = {
  isCreate: false,
  user: {},
};

const mapStateToProps = (state, ownProps) => ({
  user: getUserById(ownProps.userId)(state),
});

const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch(addUser(user)),
  editUser: (user) => dispatch(editUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);