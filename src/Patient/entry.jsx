import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import styles from './styles.scss';
import { Accordion, Panel, Modal, FormControl, Button } from 'react-bootstrap';
import Results from '../Results/entry.jsx'

var diagnosis = [[
    {
        id: 1,
        name: 'zolpofyt',
        confidence: 0.7,
        reasons: 'dope af'
    },
    {
        id: 2,
        name: 'zolpot',
        confidence: 0.3,
        reasons: 'dope af'
    },    {
            id: 2,
            name: 'zolpot',
            confidence: 0.3,
            reasons: 'dope af'
        },    {
                id: 2,
                name: 'zolpot',
                confidence: 0.3,
                reasons: 'dope af'
            },    {
                    id: 2,
                    name: 'zolpot',
                    confidence: 0.3,
                    reasons: 'dope af'
                },    {
                        id: 2,
                        name: 'zolpot',
                        confidence: 0.3,
                        reasons: 'dope af'
                    },
]]

var Patient = React.createClass({
    getInitialState(){
        return { showModal: false};
    },

    getContextTypes: {
        router: React.PropTypes.object
    },

    close(){
        this.setState({showModal: false});
    },

    select(){},

    open(){
        this.setState({showModal: true});
    },

    submit(){
        this.context.router.push(`drugorsomething/${this.state.text}`)
    },

    handleChange(event){
        this.setState({text: _.get(event, 'target.value')});
        if (_.get(event, 'target.value').length < 2) return;
        this.setState({ suggestions: [_.get(event, 'target.value')] })
    },

    render(){
        var name = _.get(this.props, 'data.personal.name');
        var age = _.get(this.props, 'data.personal.age');
        var date_of_birth = _.get(this.props, 'data.personal.date_of_birth');
        var gender = _.get(this.props, 'data.personal.sex');
        var phone_number = _.get(this.props, 'data.personal.phone_number');
        var email = _.get(this.props, 'data.personal.email');
        var id = _.get(this.props, 'data.id');
        var next_of_kin = _.get(this.props, 'data.personal.next_of_kin');
        var general_physical_assessment = _.get(this.props, 'data.personal.general_physical_assessment');
        var medical = _.get(this.props, 'data.medical');
        var social_economic_status = _.get(this.props, 'data.social_economic_status');
        var family_history = _.get(this.props, 'data.family_history');

        return (
            <div className={ styles.patient }>
                <div className={ styles.patientCard }>
                    <h2 className={ styles.cardTitle }>Personal Information</h2>
                    <div className={ styles.img }></div>
                    <div className={ styles.info }>
                        <h3>{name}</h3>
                        <p>Age: {age}</p>
                        <p>Date of Birth: {date_of_birth}</p>
                        <p>Gender: {gender}</p>
                        <p>Phone Number: {phone_number}</p>
                        <p>Email: {email}</p>
                        <p>Address: {_.get(this.props, 'data.personal.address')}</p>
                        <b><u><p>Next of Kin</p></u></b>
                        <p>Name: {next_of_kin['name']}</p>
                        <p>Relationship: {next_of_kin['relationship']}</p>
                        <p>Number: {next_of_kin['number']}</p>
                        <b><u><p>General Physical Assessment</p></u></b>
                        <p>Height: {general_physical_assessment['height']}</p>
                        <p>Weight: {general_physical_assessment['weight']}</p>
                        <p>Blood Type: {general_physical_assessment['blood_type']}</p>
                        <p>Blood Pressure: {general_physical_assessment['blood_pressure']}</p>
                    </div>
                </div>
                <Accordion>
                  <Panel header="Medical" eventKey="1" className={ styles.patientCard }>
                      <p>Allergies: {medical['allergies']}</p>
                      <p>Past Medications: {medical['past_medications']['beta_blockers']}</p>
                      <p>Surgeries: appendectomy ({medical['surgeries']['appendectomy']})</p>
                      <p>Hospitalizations: appendectomy ({medical['hospitalizations']['appendectomy']})</p>
                      <p>Immunizations: <b>All complete except measles</b></p>
                      <p>Substance Abuse: none</p>
                      <p>Diet: no restrictions</p>
                      <p>Sleep: no disturbances</p>
                      <p>Alternative Therapies or OTC Medications: {medical['alternative_therapiesOTC_medications']}</p>
                      <p>Major Illnesses: {medical['major_illnesses']['name']}</p>
                      <b><u><p>Current Medications:</p></u></b>
                      <p>SSRIs: {medical['current_medications']['SSRIs']}</p>
                      <p>Statins: {medical['current_medications']['statins']}</p>
                      <b><u><p>Out Patient Visits:</p></u></b>
                      <p>Stomach Pains: {medical['out_patient_visits']['stomach_pains']}</p>
                      <p>Flu Symptoms: {medical['out_patient_visits']['flu_symptoms']}</p>
                      <p>Chest Pains: {medical['out_patient_visits']['chest_pains']}</p>
                      <b><p>Medic Alert: Anaphylactic Peanut Allergy</p></b>
                  </Panel>
              </Accordion>
              <Accordion>
                    <Panel header="Social" eventKey="2" className={ styles.patientCard }>
                        <b><u><p>Social Economic Status</p></u></b>
                        <p>Education: {social_economic_status['education']}</p>
                        <p>Yearly Income: {social_economic_status['yearly_income']}</p>
                        <p>Occupation: {social_economic_status['occupation']}</p>
                        <b><u><p>Family History</p></u></b>
                        <p>Father: Testicular Cancer, Generalized Anxiety Disorder</p>
                        <p>Mother: Type 2 Diabetes</p>
                  </Panel>
              </Accordion>

              {
                  _.map(diagnosis, diagnosis_id =>
                  <div className={ styles.patientCard }>
                      <Results diagnosis={ diagnosis_id }></Results>
                  </div>)
              }

                <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                    <Modal.Header closeButton>
                        <Modal.Title>Add diagnosis</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter new diagnosis"
                            onChange={this.handleChange}
                            id="new_diagnosis"
                          />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.submit}>Submit</Button>
                    </Modal.Footer>
                </Modal>

                <div className={ styles.floatingBtn } onClick={ this.setState.bind(this, {showModal: true}, undefined) }>
                    +
                </div>

            </div>
        )
    }
})


function mapStateToProps(state, p){
    return {
        data: _.find(state, s => s.id == _.get(p, 'params.id'))
    }
}

//
// <div className={ styles.suggestions }>
//     { _.map(this.state.suggestions, suggestion =>
//     <div
//         onClick={ this.select.bind(this, suggestion) }
//         className={ styles.sugCard }
//     >
//         { suggestion }
//     </div>) }
// </div>




export default  connect(mapStateToProps)(Patient);
