import { createStore } from 'redux'

var initialState = [
    {
        id: 1,
        'personal': {
            name: 'John Doe',
            sex: 'M',
            date_of_birth: '03/14/70',
            age: '47',
            phone_number: '3192930012',
            email: 'john.doe@gmail.com',
            address: '21 Victoria St., Toronto, Ontario, M5S 2E2',
            next_of_kin: {
                name: 'Jane Doe',
                relationship: 'Daughter',
                number: '4167777777'
            },
            general_physical_assessment: {
                height: '173cm',
                weight: '68kg',
                blood_type: 'B+',
                blood_pressure: '70, 130'
            }
        },

        'medical': {
            allergies: 'carrot, peanut, ampicillin',
            current_medications: {
                SSRIs: 'Prozac (fluoxetine Hcl), 20 mg/day o.d, start-date: 03/15/09',
                statins: 'Mevacor (lovastatin), 20 mg/day o.d, start-date: 02/23/10'
            },
            past_medications: {
                beta_blockers: 'Inderal (propranolol), 10 mg/day q.i.d, start-date: 11/12/00 - 2/08/02'
            },
            surgeries: {
                appendectomy: '02/06/91'
            },
            hospitalizations: {
                appendectomy: '02/06/91'
            },
            major_illnesses: {
                name: "none"

            },
            out_patient_visits: {
                stomach_pains: '05/19/75',
                flu_symptoms: '09/30/81',
                chest_pains: '06/05/03'
            },
            immunizations: {
                "diphtheria": '05/04/71',
                "hepatitis A": '06/04/71',
                "hepatitis B": '11/04/71',
                "herpes zoster (shingles)": '12/06/72',
                "human papillomavirus (HPV)": '11/06/73',
                "influenza A": '12/06/72',
                "measles": '12/06/73',
                "mumps": '12/06/75',
                "meningococcal": '05/06/73',
                "pertussis (whooping cough)": '01/06/74',
                "pneumococcal": '05/06/74',
                "polio": '11/06/74',
                "rubella": '12/06/74',
                "tetanus": '02/06/75',
                "varicella (chicken pox)": '12/06/75',
            },
            substance_abuse: {
            },
            diet: 'no restrictions',
            sleep: 'no disturbances',
            alternative_therapiesOTC_medications: 'St. Johns Wart',
            pediatrics: {
                name: 'none'

            }
        },

        'social_economic_status': {
            education: 'high school diploma',
            yearly_income: '30,000 - 50,000',
            occupation: 'primary school teacher',
        },
        'family_history': {
            diabetes_type2: 'mother',
            testicular_cancer: 'father',
            generalized_anxiety_disorder: 'father'
        },
        'new_diagnosis': {
            diagnosis: 'generalized anxiety disorder',
            drug_recommendation: 'benzodiazepine: Xanax XR (alprazolam) 10mg q.i.d, start-date: NAO'
        }
    },
    {
        id: 2,
        personal:{
            name: 'Jane Doe',
            sex: 'F',
            date_of_birth: '03/14/80',
            age: '7',
            phone_number: '4162930913',
            email: 'jill.doe@gmail.com',
            address: '21 Victoria St., Toronto, Ontario, M5S 2E2'
        }
    },
    {
        id: 3,
        personal:{
            name: 'Jack Doe',
            sex: 'M',
            date_of_birth: '03/14/90',
            age: '27',
            phone_number: '6472230916',
            email: 'jack.doe@gmail.com',
            address: '70 Kidbrook St., Brampton, Ontario, L6P 2R4'
        }
    }
];

function patients(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default createStore(patients);
