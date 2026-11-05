export const identities:Record<string,{folio:string;hindi:string;label:string;description:string}>={
chambers:{folio:'01',hindi:'परिचय',label:'THE CHAMBERS / A STATEMENT OF PRINCIPLE',description:'The character of a practice is found in its attention to detail.'},
practice:{folio:'02',hindi:'विधि',label:'THE PRACTICE / INDEX OF MATTERS',description:'Distinct disciplines. One considered approach to the law.'},
advocates:{folio:'03',hindi:'अधिवक्ता',label:'THE ADVOCATES / PROFESSIONAL REGISTER',description:'The people, particulars, and perspectives behind the practice.'},
'legal-notes':{folio:'04',hindi:'विचार',label:'THE READING ROOM / NOTES & PERSPECTIVES',description:'Space to read closely. Time to consider carefully.'},
contact:{folio:'05',hindi:'पत्राचार',label:'CORRESPONDENCE / OFFICE DIRECTORY',description:'Every thoughtful conversation begins with a clear point of contact.'},
disclaimer:{folio:'06',hindi:'सूचना',label:'PUBLIC NOTICE / DISCLAIMER',description:'The scope and purpose of this demonstration.'},
privacy:{folio:'07',hindi:'निजता',label:'INFORMATION / PRIVACY NOTICE',description:'A clear account of information and its use.'},
terms:{folio:'08',hindi:'शर्तें',label:'REFERENCE / TERMS OF USE',description:'The conditions that frame this demonstration.'},
accessibility:{folio:'09',hindi:'सुगम्यता',label:'ACCESS / AN OPEN RECORD',description:'Information designed to be read, reached, and understood.'}
};
export function MicroMark(){return <svg className="micro-mark" viewBox="0 0 80 24" fill="none" aria-hidden="true"><path d="M0 12h27m26 0h27M34 12l6-6 6 6-6 6-6-6zM40 0v4m0 16v4" stroke="currentColor" strokeWidth=".7"/></svg>}
