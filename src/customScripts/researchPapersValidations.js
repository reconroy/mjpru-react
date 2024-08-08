export const validateTitle = (value) => value.trim() !== '';
export const validateJournal = (value) => value.trim() !== '';
export const validateIssn = (value) => value.trim() !== '';
export const validateMainAuthor = (value) => value !== 'select';
export const validateCoAuthors = (value) => value.trim() !== '';
export const validateYear = (value) => value !== 'select';
export const validatePageNo = (value) => value.trim() !== '';
export const validateSelfAssessmentScore = (value) => !isNaN(parseFloat(value)) && parseFloat(value) > 0;
