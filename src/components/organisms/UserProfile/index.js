import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserById } from 'store/user/selectors';
import { deleteUser } from 'store/user/actions';

import Avatar from 'components/molecules/Avatar';
import Button from 'components/molecules/Button';
import ButtonIcon from 'components/molecules/ButtonIcon';

import css from './userProfile.module.scss';

function Section({ label, value }) {
  return (
    <div className={css.section}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}

function DeleteButton({ onClick, onCancel }) {
  return (
    <div className={css.deletePrompt}>
      <div>Are you sure?</div>
      <div className={css.deleteActions}>
        <div onClick={onClick}>YES</div>
        <div onClick={onCancel}>NO</div>
      </div>
    </div>
  );
}

function UserProfile({ user, onShare, onEdit, deleteUser }) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  return (
    user ?
    <div className={css.userProfile}>
      <div className={css.top}>
        <div className={css.picture}><Avatar url={user.photoUrl} name={user.name} large /></div>
        <div className={css.name}>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
        {!isDeleting ? <div className={css.actions}>
          <ButtonIcon icon="pen" onClick={onEdit} />
          <ButtonIcon iconClass={css.deleteBtn} icon="times" onClick={() => setIsDeleting(true)} />
        </div> :
        <DeleteButton onClick={() => { setIsDeleting(false); deleteUser(user); }} onCancel={() => setIsDeleting(false)} />}
      </div>
      <div className={css.mid}>
        <Section label="Role" value={user.role} />
        <Section label="Team" value={user.team} />
        <Section label="Address" value={user.address} />
        <Section label="City" value={user.city} />
      </div>
      <div className={css.foot}>
        <Button variant="secondary" onClick={onShare}>Share</Button>
      </div>
    </div> :
    <div>No user selected</div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object,
  onShare: PropTypes.func,
  onEdit: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  user: getUserById(ownProps.userId)(state),
});

const mapDispatchToProps = dispatch => ({
  deleteUser: (user) => dispatch(deleteUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);