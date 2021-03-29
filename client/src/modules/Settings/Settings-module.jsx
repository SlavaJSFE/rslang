import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { fetchSettings, updateSettings } from '../../redux/textBook/actions';

function SettingsModule({
  fetchSettingsConnect,
  updateSettingsConnect,
  isTranslation,
  isButtonsActive,
  userData,
}) {
  const onSettingsChange = (event) => {
    updateSettingsConnect(event.target.name, event.target.checked, userData);
  };

  useEffect(() => {
    fetchSettingsConnect(userData);
  }, []);

  return (
    <div className="settings-module">
      <h2>Settings Module</h2>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="start"
            control={(
              <Switch
                color="primary"
                name="isTranslation"
                checked={isTranslation}
                onChange={onSettingsChange}
              />
            )}
            label="Отображать перевод изучаемого слова и перевод предложений с ним"
            labelPlacement="start"
          />
          <FormControlLabel
            value="start"
            control={(
              <Switch
                color="primary"
                name="isButtonsActive"
                checked={isButtonsActive}
                onChange={onSettingsChange}
              />
            )}
            label="Отображать кнопки, 'Сложные слова' или 'Удалённые слова'"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isTranslation: state.textBookPage.settings.optional.isTranslation,
  isButtonsActive: state.textBookPage.settings.optional.isButtonsActive,
  userData: state.user.user,
});

export default connect(mapStateToProps, {
  fetchSettingsConnect: fetchSettings,
  updateSettingsConnect: updateSettings,
})(SettingsModule);
