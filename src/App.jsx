// // import React, { useState, useRef, useEffect } from 'react';
// // import './index.css';
// // import { 
// //   User, GraduationCap, Phone, DollarSign, Home, BookOpen, Settings, 
// //   Download, Printer, Plus, Search, Eye, CreditCard, UserPlus, Calculator, 
// //   LogOut, School, FileText, Award, BarChart3, Users, Trash2, Edit3, X, 
// //   Mail, Calendar, MapPin, Clock, Shield, Star, Book, Menu // Add Menu here
// // } from 'lucide-react';
// // // import { User, GraduationCap, Phone, DollarSign, Home, BookOpen, Settings, Download, Printer, Plus, Search, Eye, CreditCard, UserPlus, Calculator, LogOut, School, FileText, Award, BarChart3, Users, Trash2, Edit3, X, Mail, Calendar, MapPin, Clock, Shield, Star, Book } from 'lucide-react';
// // import Slider from './component/Slider';
// // import StudentProfile from 'c:/Users/Waqas/Downloads/StudentProfile';
// // import { div } from 'framer-motion/client';

// // // Single-file React component for IGPS school app
// // // Built to be used inside a Create React App or Vite project with Tailwind CSS

// // export default function SchoolApp() {
// //   const [currentPage, setCurrentPage] = useState('home');
// //   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
// //   const [userType, setUserType] = useState(''); // 'student' or ''
// //   const [studentInfo, setStudentInfo] = useState({ name: '', class: '', rollNo: '' });
// //   const [loginForm, setLoginForm] = useState({ username: '', password: '' });
// //   const [searchTerm, setSearchTerm] = useState(''); // admin search
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// //   const [paymentType, setPaymentType] = useState('full');
// //   const [customAmount, setCustomAmount] = useState('');
// //   const printRef = useRef(null);
// //   const [selectedTeacher, setSelectedTeacher] = useState(null);

// //   // ---------- PERSISTENCE: load/save studentsData ----------
// //   const STORAGE_KEY = 'igps_students_data_v1';
// //   const STUDENT_PROFILES_STORAGE_KEY = 'igps_student_profiles_data_v1';
// //   const TEACHERS_STORAGE_KEY = 'igps_teachers_data_v1';
// //   const GLOBAL_FEES_STORAGE_KEY = 'igps_global_fees_data_v1';
// //   const RESULTS_STORAGE_KEY = 'igps_results_data_v1';

// //   const [studentsData, setStudentsData] = useState(() => {
// //     try {
// //       const saved = localStorage.getItem(STORAGE_KEY);
// //       if (saved) return JSON.parse(saved);
// //     } catch (e) {
// //       console.error('Failed to parse saved students data', e);
// //     }
// //     // START EMPTY (no pre-added classes) as you requested
// //     return {};
// //   });

// //   const [teachersData, setTeachersData] = useState(() => {
// //     try {
// //       const saved = localStorage.getItem(TEACHERS_STORAGE_KEY);
// //       if (saved) return JSON.parse(saved);
// //     } catch (e) {
// //       console.error('Failed to parse saved teachers data', e);
// //     }
// //     return [];
// //   });

// //   const [globalFees, setGlobalFees] = useState(() => {
// //     try {
// //       const saved = localStorage.getItem(GLOBAL_FEES_STORAGE_KEY);
// //       if (saved) return JSON.parse(saved);
// //     } catch (e) {
// //       console.error('Failed to parse saved global fees data', e);
// //     }
// //     return [];
// //   });
// //     // Convert photo to base64 if it exists
// //     let photoBase64 = null;
// //     if (photo) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         const profileWithPhoto = {
// //           id: newId,
// //           name: name.trim(),
// //           fatherName: fatherName.trim(),
// //           class: className.trim(),
// //           rollNo: rollNo.trim(),
// //           phone: phone.trim(),
// //           birthDate: birthDate,
// //           photo: e.target.result
// //         };

// //         setStudentProfiles(prev => [...prev, profileWithPhoto]);
// //         setNewStudentProfile({
// //           name: '',
// //           fatherName: '',
// //           class: '',
// //           rollNo: '',
// //           phone: '',
// //           birthDate: '',
// //           photo: null
// //         });
// //         addToast('Student profile added successfully.');
// //       };
// //       reader.readAsDataURL(photo);
// //     } else {
// //       setStudentProfiles(prev => [
// //         ...prev,
// //         {
// //           id: newId,
// //           name: name.trim(),
// //           fatherName: fatherName.trim(),
// //           class: className.trim(),
// //           rollNo: rollNo.trim(),
// //           phone: phone.trim(),
// //           birthDate: birthDate,
// //           photo: null
// //         }
// //       ]);
// //       setNewStudentProfile({
// //         name: '',
// //         fatherName: '',
// //         class: '',
// //         rollNo: '',
// //         phone: '',
// //         birthDate: '',
// //         photo: null
// //       });
// //       addToast('Student profile added successfully.');
// //     }
// //   };

// //   // Delete student profile
// //   const deleteStudentProfile = (id) => {
// //     addConfirmToast('Delete this student profile?', () => {
// //       setStudentProfiles(prev => prev.filter(profile => profile.id !== id));
// //       addToast('Student profile deleted.');
// //     }, { duration: 7000 });
// //   };

// //   // Recommended states (if not already present)
// // const [studentProfiles, setStudentProfiles] = useState([]); // always an array
// // const [newStudentProfile, setNewStudentProfile] = useState({
// //   id: null,
// //   name: '',
// //   fatherName: '',
// //   class: '',
// //   rollNo: '',
// //   phone: '',
// //   birthDate: '',
// //   photo: null
// // });
// // const [editingProfileId, setEditingProfileId] = useState(null);

// // // ---- Add student profile ----
// // const addStudentProfile = () => {
// //   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;

// //   if (!name || !fatherName || !className || !rollNo) {
// //     addToast('Please fill all required fields to add student profile.', { type: 'error' });
// //     return;
// //   }

// //   const safeProfiles = Array.isArray(studentProfiles) ? studentProfiles : [];
// //   const newId = safeProfiles.length > 0 ? Math.max(...safeProfiles.map(p => p.id)) + 1 : 1;

// //   const saveProfile = (photoBase64 = null) => {
// //     const profile = {
// //       id: newId,
// //       name: name.trim(),
// //       fatherName: fatherName.trim(),
// //       class: className.trim(),
// //       rollNo: rollNo.trim(),
// //       phone: phone ? phone.trim() : '',
// //       birthDate: birthDate || '',
// //       photo: photoBase64
// //     };
// //     setStudentProfiles(prev => [...(Array.isArray(prev) ? prev : []), profile]);
// //     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// //     addToast('Student profile added successfully.');
// //   };

// //   // If user provided a File -> convert to base64
// //   if (photo instanceof File) {
// //     const reader = new FileReader();
// //     reader.onload = (e) => saveProfile(e.target.result);
// //     reader.readAsDataURL(photo);
// //   } else {
// //     // no file (or photo is already base64 - but for add, it should be null)
// //     saveProfile(photo ?? null);
// //   }
// // };

// // // ---- Start editing (fills the form) ----
// // const startEditingProfile = (profile) => {
// //   setEditingProfileId(profile.id);
// //   setNewStudentProfile({
// //     id: profile.id,
// //     name: profile.name ?? '',
// //     fatherName: profile.fatherName ?? '',
// //     class: profile.class ?? '',
// //     rollNo: profile.rollNo ?? '',
// //     phone: profile.phone ?? '',
// //     birthDate: profile.birthDate ?? '',
// //     photo: null // IMPORTANT: null means "no new file uploaded yet"
// //   });
// //   // optional: scroll to form
// //   window.scrollTo({ top: 0, behavior: 'smooth' });
// // };

// // // ---- Update student profile ----
// // const updateStudentProfile = () => {
// //   if (!editingProfileId) return;

// //   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
// //   if (!name || !fatherName || !className || !rollNo) {
// //     addToast('Please fill all required fields to update student profile.', { type: 'error' });
// //     return;
// //   }

// //   const applyUpdate = (photoBase64 = null) => {
// //     setStudentProfiles(prev =>
// //       (Array.isArray(prev) ? prev : []).map(p =>
// //         p.id === editingProfileId
// //           ? {
// //               ...p,
// //               name: name.trim(),
// //               fatherName: fatherName.trim(),
// //               class: className.trim(),
// //               rollNo: rollNo.trim(),
// //               phone: phone ? phone.trim() : '',
// //               birthDate: birthDate || '',
// //               photo: photoBase64 ?? p.photo ?? null // use new photo if provided, else keep existing
// //             }
// //           : p
// //       )
// //     );

// //     setEditingProfileId(null);
// //     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// //     addToast('Student profile updated successfully.');
// //   };

// //   // Only convert to base64 if the uploaded item is a File
// //   if (photo instanceof File) {
// //     const reader = new FileReader();
// //     reader.onload = (e) => applyUpdate(e.target.result);
// //     reader.readAsDataURL(photo);
// //   } else {
// //     // no new file uploaded: keep previous photo stored in profiles
// //     applyUpdate();
// //   }
// // };

// // // ---- Cancel editing (reset form) ----
// // const cancelEditing = () => {
// //   setEditingProfileId(null);
// //   setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// // };

// // // ---- Delete student profile ----
// // const deleteStudentProfile = (id) => {
// //   addConfirmToast('Delete this student profile?', () => {
// //     setStudentProfiles(prev => (Array.isArray(prev) ? prev.filter(profile => profile.id !== id) : []));
// //     addToast('Student profile deleted.');
// //   }, { duration: 7000 });
// // };


// //    // Student profiles with photos
// //   const [studentProfiles, setStudentProfiles] = useState(() => {
// //     try {
// //       const saved = localStorage.getItem(STUDENT_PROFILES_STORAGE_KEY);
// //       if (saved) return JSON.parse(saved);
// //     } catch (e) {
// //       console.error('Failed to parse saved student profiles data', e);
// //     }
// //     return [];
// //   });

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsData));
// //     } catch (e) {
// //       console.error('Failed to save students data', e);
// //     }
// //   }, [studentsData]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(TEACHERS_STORAGE_KEY, JSON.stringify(teachersData));
// //     } catch (e) {
// //       console.error('Failed to save teachers data', e);
// //     }
// //   }, [teachersData]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(GLOBAL_FEES_STORAGE_KEY, JSON.stringify(globalFees));
// //     } catch (e) {
// //       console.error('Failed to save global fees data', e);
// //     }
// //   }, [globalFees]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(resultsData));
// //     } catch (e) {
// //       console.error('Failed to save results data', e);
// //     }
// //   }, [resultsData]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(STUDENT_PROFILES_STORAGE_KEY, JSON.stringify(studentProfiles));
// //     } catch (e) {
// //       console.error('Failed to save student profiles data', e);
// //     }
// //   }, [studentProfiles]);


// //    const addStudent = () => {
// //     const { name, rollNo, fatherName, monthlyFee, classKey } = newStudent;
// //     if (!name || !rollNo || !fatherName || !monthlyFee || !classKey) {
// //       addToast('Please fill all fields to add student.', { type: 'error' });
// //       return;
// //     }

// //     const updated = { ...studentsData };
// //     if (!updated[classKey]) updated[classKey] = [];

// //     const all = getAllStudents();
// //     const newId = all.length > 0 ? Math.max(...all.map(s => s.id)) + 1 : 1;

// //     updated[classKey].push({
// //       id: newId,
// //       name: name.trim(),
// //       rollNo: rollNo.trim(),
// //       fatherName: fatherName.trim(),
// //       monthlyFee: parseInt(monthlyFee, 10),
// //       pendingFee: parseInt(monthlyFee, 10),
// //       totalPaid: 0,
// //       feeHistory: [],
// //       extraFees: [] // initialize extra fees array
// //     });

// //     setStudentsData(updated);
// //     setNewStudent({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' });
// //     addToast('Student added to class.');
// //   };

// //   // Admin: add student profile
// //   const addStudentProfile = () => {
// //     const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
// //     if (!name || !fatherName || !className || !rollNo) {
// //       addToast('Please fill all required fields to add student profile.', { type: 'error' });
// //       return;
// //     }

// //     const newId = studentProfiles.length > 0 ? Math.max(...studentProfiles.map(p => p.id)) + 1 : 1;
// //   // For DMC (results) - simplified data structure
// //   const [resultsData, setResultsData] = useState(() => {
// //     try {
// //       const saved = localStorage.getItem(RESULTS_STORAGE_KEY);
// //       if (saved) return JSON.parse(saved);
// //     } catch (e) {
// //       console.error('Failed to parse saved results data', e);
// //     }
// //     return {};
// //   });

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsData));
// //     } catch (e) {
// //       console.error('Failed to save students data', e);
// //     }
// //   }, [studentsData]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(TEACHERS_STORAGE_KEY, JSON.stringify(teachersData));
// //     } catch (e) {
// //       console.error('Failed to save teachers data', e);
// //     }
// //   }, [teachersData]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(GLOBAL_FEES_STORAGE_KEY, JSON.stringify(globalFees));
// //     } catch (e) {
// //       console.error('Failed to save global fees data', e);
// //     }
// //   }, [globalFees]);

// //   useEffect(() => {
// //     try {
// //       localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(resultsData));
// //     } catch (e) {
// //       console.error('Failed to save results data', e);
// //     }
// //   }, [resultsData]);
// //   // -------------------------------------------------------

// //   // For admin: add class and add student form states
// //   const [newClassName, setNewClassName] = useState('');
// //   const [newStudent, setNewStudent] = useState({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' });

// //   // For editing student
// //   const [editingStudent, setEditingStudent] = useState(null); // { classKey, ...student }

// //   // For extra-fee UI (global)
// //   const [globalExtraLabel, setGlobalExtraLabel] = useState('');
// //   const [globalExtraAmount, setGlobalExtraAmount] = useState('');
// //   const [selectedClasses, setSelectedClasses] = useState([]);

// //   // For adding per-student extra fee in edit panel
// //   const [editExtraLabel, setEditExtraLabel] = useState('');
// //   const [editExtraAmount, setEditExtraAmount] = useState('');

// //   // For teacher management
// //   const [newTeacher, setNewTeacher] = useState({ 
// //     name: '', 
// //     fatherName: '', 
// //     cnic: '', 
// //     phone: '', 
// //     salary: '', 
// //     section: '',
// //     qualification: '',
// //     experience: '',
// //     joinDate: ''
// //   });



// //   // ---------- Toast system (no alerts) ----------
// //   const [toasts, setToasts] = useState([]); // {id, message, type, confirm, onConfirm}

// //   const addToast = (message, { type = 'success', duration = 1400 } = {}) => {
// //     const id = Date.now().toString() + Math.random().toString(36).slice(2);
// //     const toast = { id, message, type, confirm: false };
// //     setToasts(prev => [...prev, toast]);
// //     if (duration > 0) {
// //       setTimeout(() => {
// //         setToasts(prev => prev.filter(t => t.id !== id));
// //       }, duration);
// //     }
// //     return id;
// //   };

// //   const addConfirmToast = (message, onConfirm, { duration = 5000 } = {}) => {
// //     const id = Date.now().toString() + Math.random().toString(36).slice(2);
// //     const toast = { id, message, type: 'confirm', confirm: true, onConfirm };
// //     setToasts(prev => [...prev, toast]);
// //     if (duration > 0) {
// //       setTimeout(() => {
// //         setToasts(prev => prev.filter(t => t.id !== id));
// //       }, duration);
// //     }
// //     return id;
// //   };

// //   const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));
// //   // ------------------------------------------------

// //   // Helpers
// //   const getAllStudents = () => {
// //     const all = [];
// //     Object.keys(studentsData).forEach(classKey => {
// //       const arr = studentsData[classKey] || [];
// //       arr.forEach(s => all.push({ ...s, classKey }));
// //     });
// //     return all;
// //   };

// //   const formatCurrency = (n) => `Rs. ${Number(n || 0).toLocaleString()}`;

// //   // Calculate total pending for display: base pendingFee + sum of extraFees pending
// //   const calculateTotalPendingForStudent = (s) => {
// //     const basePending = Number(s.pendingFee || 0);
// //     const extrasPending = (s.extraFees || []).reduce((acc, ef) => acc + (ef.status === 'pending' ? Number(ef.amount || 0) : 0), 0);
// //     return basePending + extrasPending;
// //   };

// //   // Student side search
// //   const handleStudentSearch = (e) => {
// //     if (e) e.preventDefault();
// //     const classStudents = studentsData[studentInfo.class] || [];
// //     const student = classStudents.find(s =>
// //       s.name.toLowerCase() === studentInfo.name.trim().toLowerCase() && s.rollNo === studentInfo.rollNo.trim()
// //     );

// //     if (student) {
// //       setSelectedStudent({ ...student, className: studentInfo.class });
// //       setCurrentPage('student-fee-detail');
// //     } else {
// //       addToast('Student not found! Please check Name, Class and Roll Number.', { type: 'error' });
// //     }
// //   };

// //   // DMC search
// //   const handleDmcSearch = (e) => {
// //     if (e) e.preventDefault();
// //     const classResults = resultsData[studentInfo.class] || {};
// //     const result = classResults[studentInfo.rollNo];

// //     if (result && result.name.toLowerCase() === studentInfo.name.trim().toLowerCase()) {
// //       setSelectedStudent({ 
// //         ...result, 
// //         className: studentInfo.class,
// //         hasDmc: true 
// //       });
// //       setCurrentPage('student-dmc');
// //     } else {
// //       addToast('Result not found! Please check Name, Class and Roll Number.', { type: 'error' });
// //     }
// //   };

// //   // Admin login
// //   const handleAdminLogin = (e) => {
// //     e.preventDefault();
// //     const { username, password } = loginForm;
// //     // preserved the password text exactly as in your pasted code
// //     if (username === 'IGPS' && password === 'IQRAGPS') {
// //       setIsAdminLoggedIn(true);
// //       setCurrentPage('admin-dashboard');
// //       setLoginForm({ username: '', password: '' });
// //       addToast('Admin logged in.');
// //     } else {
// //       addToast('Invalid admin credentials.', { type: 'error' });
// //     }
// //   };

// //   // Admin: add class
// //   const addClass = () => {
// //     const key = newClassName.trim();
// //     if (!key) {
// //       addToast('Please enter a class key (e.g. class-4)', { type: 'error' });
// //       return;
// //     }
// //     if (studentsData[key]) {
// //       addToast('This class already exists.', { type: 'error' });
// //       return;
// //     }
// //     setStudentsData(prev => ({ ...prev, [key]: [] }));
// //     setNewClassName('');
// //     addToast('Class added successfully.');
// //   };


// // const [editingProfileId, setEditingProfileId] = useState(null);

// // // ---- Add student profile ----
// // // const addStudentProfile = () => {
// // //   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;

// // //   if (!name || !fatherName || !className || !rollNo) {
// // //     addToast('Please fill all required fields to add student profile.', { type: 'error' });
// // //     return;
// // //   }

// // //   const safeProfiles = Array.isArray(studentProfiles) ? studentProfiles : [];
// // //   const newId = safeProfiles.length > 0 ? Math.max(...safeProfiles.map(p => p.id)) + 1 : 1;

// // //   const saveProfile = (photoBase64 = null) => {
// // //     const profile = {
// // //       id: newId,
// // //       name: name.trim(),
// // //       fatherName: fatherName.trim(),
// // //       class: className.trim(),
// // //       rollNo: rollNo.trim(),
// // //       phone: phone ? phone.trim() : '',
// // //       birthDate: birthDate || '',
// // //       photo: photoBase64
// // //     };
// // //     setStudentProfiles(prev => [...(Array.isArray(prev) ? prev : []), profile]);
// // //     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// // //     addToast('Student profile added successfully.');
// // //   };

// // //   // If user provided a File -> convert to base64
// // //   if (photo instanceof File) {
// // //     const reader = new FileReader();
// // //     reader.onload = (e) => saveProfile(e.target.result);
// // //     reader.readAsDataURL(photo);
// // //   } else {
// // //     // no file (or photo is already base64 - but for add, it should be null)
// // //     saveProfile(photo ?? null);
// // //   }
// // // };

// // // ---- Start editing (fills the form) ----
// // const startEditingProfile = (profile) => {
// //   setEditingProfileId(profile.id);
// //   setNewStudentProfile({
// //     id: profile.id,
// //     name: profile.name ?? '',
// //     fatherName: profile.fatherName ?? '',
// //     class: profile.class ?? '',
// //     rollNo: profile.rollNo ?? '',
// //     phone: profile.phone ?? '',
// //     birthDate: profile.birthDate ?? '',
// //     photo: null // IMPORTANT: null means "no new file uploaded yet"
// //   });
// //   // optional: scroll to form
// //   window.scrollTo({ top: 0, behavior: 'smooth' });
// // };

// // // ---- Update student profile ----
// // const updateStudentProfile = () => {
// //   if (!editingProfileId) return;

// //   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
// //   if (!name || !fatherName || !className || !rollNo) {
// //     addToast('Please fill all required fields to update student profile.', { type: 'error' });
// //     return;
// //   }

// //   const applyUpdate = (photoBase64 = null) => {
// //     setStudentProfiles(prev =>
// //       (Array.isArray(prev) ? prev : []).map(p =>
// //         p.id === editingProfileId
// //           ? {
// //               ...p,
// //               name: name.trim(),
// //               fatherName: fatherName.trim(),
// //               class: className.trim(),
// //               rollNo: rollNo.trim(),
// //               phone: phone ? phone.trim() : '',
// //               birthDate: birthDate || '',
// //               photo: photoBase64 ?? p.photo ?? null // use new photo if provided, else keep existing
// //             }
// //           : p
// //       )
// //     );

// //     setEditingProfileId(null);
// //     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// //     addToast('Student profile updated successfully.');
// //   };

// //   // Only convert to base64 if the uploaded item is a File
// //   if (photo instanceof File) {
// //     const reader = new FileReader();
// //     reader.onload = (e) => applyUpdate(e.target.result);
// //     reader.readAsDataURL(photo);
// //   } else {
// //     // no new file uploaded: keep previous photo stored in profiles
// //     applyUpdate();
// //   }
// // };

// // // ---- Cancel editing (reset form) ----
// // const cancelEditing = () => {
// //   setEditingProfileId(null);
// //   setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// // };

// // // ---- Delete student profile ----
// // const deleteStudentProfile = (id) => {
// //   addConfirmToast('Delete this student profile?', () => {
// //     setStudentProfiles(prev => (Array.isArray(prev) ? prev.filter(profile => profile.id !== id) : []));
// //     addToast('Student profile deleted.');
// //   }, { duration: 7000 });
// // };


// import React, { useState, useRef, useEffect } from 'react';
// import './index.css';
// import { 
//   User, GraduationCap, Phone, DollarSign, Home, BookOpen, Settings, 
//   Download, Printer, Plus, Search, Eye, CreditCard, UserPlus, Calculator, 
//   LogOut, School, FileText, Award, BarChart3, Users, Trash2, Edit3, X, 
//   Mail, Calendar, MapPin, Clock, Shield, Star, Book, Menu // Add Menu here
// } from 'lucide-react';
// import Slider from './component/Slider';
// import StudentProfile from 'c:/Users/Waqas/Downloads/StudentProfile';
// import { div } from 'framer-motion/client';

// export default function SchoolApp() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [userType, setUserType] = useState('');
//   const [studentInfo, setStudentInfo] = useState({ name: '', class: '', rollNo: '' });
//   const [loginForm, setLoginForm] = useState({ username: '', password: '' });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [paymentType, setPaymentType] = useState('full');
//   const [customAmount, setCustomAmount] = useState('');
//   const printRef = useRef(null);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);

//   const STORAGE_KEY = 'igps_students_data_v1';
//   const STUDENT_PROFILES_STORAGE_KEY = 'igps_student_profiles_data_v1';
//   const TEACHERS_STORAGE_KEY = 'igps_teachers_data_v1';
//   const GLOBAL_FEES_STORAGE_KEY = 'igps_global_fees_data_v1';
//   const RESULTS_STORAGE_KEY = 'igps_results_data_v1';

//   const [studentsData, setStudentsData] = useState(() => {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved students data', e);
//     }
//     return {};
//   });

//   const [teachersData, setTeachersData] = useState(() => {
//     try {
//       const saved = localStorage.getItem(TEACHERS_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved teachers data', e);
//     }
//     return [];
//   });

//   const [globalFees, setGlobalFees] = useState(() => {
//     try {
//       const saved = localStorage.getItem(GLOBAL_FEES_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved global fees data', e);
//     }
//     return [];
//   });

//   // ❌ REMOVED duplicated "Convert photo to base64" + addStudentProfile logic (it was repeated below)

//   // Recommended states (keep only once)
//   const [studentProfiles, setStudentProfiles] = useState([]); 
//   const [newStudentProfile, setNewStudentProfile] = useState({
//     id: null,
//     name: '',
//     fatherName: '',
//     class: '',
//     rollNo: '',
//     phone: '',
//     birthDate: '',
//     photo: null
//   });
//   const [editingProfileId, setEditingProfileId] = useState(null);

//   // ---- Add student profile ----
//   const addStudentProfile = () => {
//     const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;

//     if (!name || !fatherName || !className || !rollNo) {
//       addToast('Please fill all required fields to add student profile.', { type: 'error' });
//       return;
//     }

//     const safeProfiles = Array.isArray(studentProfiles) ? studentProfiles : [];
//     const newId = safeProfiles.length > 0 ? Math.max(...safeProfiles.map(p => p.id)) + 1 : 1;

//     const saveProfile = (photoBase64 = null) => {
//       const profile = {
//         id: newId,
//         name: name.trim(),
//         fatherName: fatherName.trim(),
//         class: className.trim(),
//         rollNo: rollNo.trim(),
//         phone: phone ? phone.trim() : '',
//         birthDate: birthDate || '',
//         photo: photoBase64
//       };
//       setStudentProfiles(prev => [...(Array.isArray(prev) ? prev : []), profile]);
//       setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
//       addToast('Student profile added successfully.');
//     };

//     if (photo instanceof File) {
//       const reader = new FileReader();
//       reader.onload = (e) => saveProfile(e.target.result);
//       reader.readAsDataURL(photo);
//     } else {
//       saveProfile(photo ?? null);
//     }
//   };

//   // ---- Start editing ----
//   const startEditingProfile = (profile) => {
//     setEditingProfileId(profile.id);
//     setNewStudentProfile({
//       id: profile.id,
//       name: profile.name ?? '',
//       fatherName: profile.fatherName ?? '',
//       class: profile.class ?? '',
//       rollNo: profile.rollNo ?? '',
//       phone: profile.phone ?? '',
//       birthDate: profile.birthDate ?? '',
//       photo: null 
//     });
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // ---- Update student profile ----
//   const updateStudentProfile = () => {
//     if (!editingProfileId) return;

//     const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
//     if (!name || !fatherName || !className || !rollNo) {
//       addToast('Please fill all required fields to update student profile.', { type: 'error' });
//       return;
//     }

//     const applyUpdate = (photoBase64 = null) => {
//       setStudentProfiles(prev =>
//         (Array.isArray(prev) ? prev : []).map(p =>
//           p.id === editingProfileId
//             ? {
//                 ...p,
//                 name: name.trim(),
//                 fatherName: fatherName.trim(),
//                 class: className.trim(),
//                 rollNo: rollNo.trim(),
//                 phone: phone ? phone.trim() : '',
//                 birthDate: birthDate || '',
//                 photo: photoBase64 ?? p.photo ?? null 
//               }
//             : p
//         )
//       );

//       setEditingProfileId(null);
//       setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
//       addToast('Student profile updated successfully.');
//     };

//     if (photo instanceof File) {
//       const reader = new FileReader();
//       reader.onload = (e) => applyUpdate(e.target.result);
//       reader.readAsDataURL(photo);
//     } else {
//       applyUpdate();
//     }
//   };

//   // ---- Cancel editing ----
//   const cancelEditing = () => {
//     setEditingProfileId(null);
//     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
//   };

//   // ---- Delete student profile ----
//   const deleteStudentProfile = (id) => {
//     addConfirmToast('Delete this student profile?', () => {
//       setStudentProfiles(prev => (Array.isArray(prev) ? prev.filter(profile => profile.id !== id) : []));
//       addToast('Student profile deleted.');
//     }, { duration: 7000 });
//   };

//   // ❌ REMOVED the first duplicate deleteStudentProfile — kept only this one


//   // Admin: add global extra to selected classes (creates pending extra-fee entry for students in selected classes)
//   const applyGlobalExtraToSelectedClasses = () => {
//     const label = (globalExtraLabel || '').trim();
//     const amount = Number(globalExtraAmount || 0);
//     if (!label || amount <= 0) {
//       addToast('Provide valid label and amount for global extra fee.', { type: 'error' });
//       return;
//     }

//     if (selectedClasses.length === 0) {
//       addToast('Please select at least one class.', { type: 'error' });
//       return;
//     }

//     // Add to global fees list
//     const newGlobalFee = {
//       id: Date.now().toString(),
//       label,
//       amount,
//       appliedTo: selectedClasses,
//       date: new Date().toLocaleDateString()
//     };

//     setGlobalFees(prev => [...prev, newGlobalFee]);

//     const updated = { ...studentsData };
//     Object.keys(updated).forEach(classKey => {
//       // Only apply to selected classes
//       if (selectedClasses.includes(classKey)) {
//         updated[classKey] = updated[classKey].map(s => {
//           const copy = { ...s };
//           copy.extraFees = copy.extraFees || [];
//           copy.extraFees.push({ 
//             id: Date.now().toString() + Math.random().toString(36).slice(2), 
//             label, 
//             amount, 
//             status: 'pending',
//             globalFeeId: newGlobalFee.id
//           });
//           return copy;
//         });
//       }
//     });
//     setStudentsData(updated);
//     setGlobalExtraLabel('');
//     setGlobalExtraAmount('');
//     setSelectedClasses([]);
//     addToast(`Global extra "${label}" added to selected classes.`);
//   };

//   // Admin: remove global extra fee
//   const removeGlobalExtraFee = (feeId) => {
//     addConfirmToast('Remove this global fee from all students?', () => {
//       // Remove from global fees list
//       setGlobalFees(prev => prev.filter(fee => fee.id !== feeId));

//       // Remove from all students
//       const updated = { ...studentsData };
//       Object.keys(updated).forEach(classKey => {
//         updated[classKey] = updated[classKey].map(s => {
//           const copy = { ...s };
//           copy.extraFees = (copy.extraFees || []).filter(ef => ef.globalFeeId !== feeId);
//           return copy;
//         });
//       });
//       setStudentsData(updated);
//       addToast('Global fee removed from all students.');
//     }, { duration: 7000 });
//   };

//   // Toggle class selection for global extra fees
//   const toggleClassSelection = (classKey) => {
//     if (selectedClasses.includes(classKey)) {
//       setSelectedClasses(selectedClasses.filter(c => c !== classKey));
//     } else {
//       setSelectedClasses([...selectedClasses, classKey]);
//     }
//   };

//   // Select all classes for global extra fees
//   const selectAllClasses = () => {
//     setSelectedClasses(Object.keys(studentsData));
//   };

//   // Deselect all classes for global extra fees
//   const deselectAllClasses = () => {
//     setSelectedClasses([]);
//   };

//   // Admin: add per-student extra (from editing panel)
//   const addExtraToEditingStudent = () => {
//     if (!editingStudent) {
//       addToast('No student selected to add extra fee to.', { type: 'error' });
//       return;
//     }
//     const label = (editExtraLabel || '').trim();
//     const amount = Number(editExtraAmount || 0);
//     if (!label || amount <= 0) {
//       addToast('Provide valid label and amount for extra fee.', { type: 'error' });
//       return;
//     }
//     const classKey = editingStudent.classKey;
//     setStudentsData(prev => {
//       const copy = { ...prev };
//       if (!copy[classKey]) return prev;
//       const idx = copy[classKey].findIndex(s => s.id === editingStudent.id);
//       if (idx === -1) return prev;
//       const st = { ...copy[classKey][idx] };
//       st.extraFees = st.extraFees || [];
//       st.extraFees.push({ id: Date.now().toString() + Math.random().toString(36).slice(2), label, amount, status: 'pending' });
//       copy[classKey][idx] = st;
//       return copy;
//     });
//     // refresh editingStudent to show new extra
//     setEditingStudent(prev => ({ ...prev, extraFees: [...(prev.extraFees || []), { id: Date.now().toString(), label, amount, status: 'pending' }] }));
//     setEditExtraLabel('');
//     setEditExtraAmount('');
//     addToast('Extra fee added to student.');
//   };

//   // Admin: edit student (updates fields)
//   const saveEditedStudent = () => {
//     if (!editingStudent) return;
//     const { classKey, id, name, rollNo, fatherName, monthlyFee, pendingFee, totalPaid, extraFees } = editingStudent;
//     if (!classKey) {
//       addToast('Missing class for student.', { type: 'error' });
//       return;
//     }

//     setStudentsData(prev => {
//       const copy = { ...prev };
//       if (!copy[classKey]) return prev;
//       const idx = copy[classKey].findIndex(s => s.id === id);
//       if (idx === -1) return prev;
//       copy[classKey][idx] = {
//         ...copy[classKey][idx],
//         name: (name || '').trim(),
//         rollNo: (rollNo || '').trim(),
//         fatherName: (fatherName || '').trim(),
//         monthlyFee: Number(monthlyFee) || 0,
//         pendingFee: Number(pendingFee) || 0,
//         totalPaid: Number(totalPaid) || 0,
//         extraFees: Array.isArray(extraFees) ? extraFees : (copy[classKey][idx].extraFees || [])
//       };
//       return copy;
//     });
//     setEditingStudent(null);
//     addToast('Student updated.');
//   };

//   // Admin: mark an extra fee as removed (for a student) - remove pending extra (admin might choose to remove)
//   const removeExtraFromStudent = (classKey, studentId, extraId) => {
//     addConfirmToast('Remove this extra fee for student?', () => {
//       setStudentsData(prev => {
//         const copy = { ...prev };
//         if (!copy[classKey]) return prev;
//         const idx = copy[classKey].findIndex(s => s.id === studentId);
//         if (idx === -1) return prev;
//         const st = { ...copy[classKey][idx] };
//         st.extraFees = (st.extraFees || []).filter(e => e.id !== extraId);
//         copy[classKey][idx] = st;
//         return copy;
//       });
//       addToast('Extra fee removed.');
//     }, { duration: 7000 });
//   };

//   // Admin: delete student (uses confirm toast)
//   const deleteStudent = (classKey, id) => {
//     addConfirmToast('Delete this student?', () => {
//       setStudentsData(prev => {
//         const copy = { ...prev };
//         copy[classKey] = (copy[classKey] || []).filter(s => s.id !== id);
//         return copy;
//       });
//       // if this student was open, close the detail view
//       if (selectedStudent && selectedStudent.id === id && (selectedStudent.className === classKey || selectedStudent.classKey === classKey)) {
//         setSelectedStudent(null);
//         setCurrentPage('admin-dashboard');
//       }
//       addToast('Student deleted.');
//     }, { duration: 7000 });
//   };

//   // Add teacher
//   const addTeacher = () => {
//     const { name, fatherName, cnic, phone, salary, section, qualification, experience, joinDate } = newTeacher;
//     if (!name || !fatherName || !cnic || !phone || !salary || !section) {
//       addToast('Please fill all required fields to add teacher.', { type: 'error' });
//       return;
//     }

//     const newId = teachersData.length > 0 ? Math.max(...teachersData.map(t => t.id)) + 1 : 1;

//     setTeachersData(prev => [
//       ...prev,
//       {
//         id: newId,
//         name: name.trim(),
//         fatherName: fatherName.trim(),
//         cnic: cnic.trim(),
//         phone: phone.trim(),
//         salary: parseInt(salary, 10),
//         section: section.trim(),
//         qualification: qualification.trim(),
//         experience: experience.trim(),
//         joinDate: joinDate || new Date().toLocaleDateString()
//       }
//     ]);

//     setNewTeacher({ name: '', fatherName: '', cnic: '', phone: '', salary: '', section: '', qualification: '', experience: '', joinDate: '' });
//     addToast('Teacher added successfully.');
//   };

//   // Delete teacher
//   const deleteTeacher = (id) => {
//     addConfirmToast('Delete this teacher?', () => {
//       setTeachersData(prev => prev.filter(teacher => teacher.id !== id));
//       addToast('Teacher deleted.');
//     }, { duration: 7000 });
//   };

//   // View teacher details
//   const viewTeacherDetails = (teacher) => {
//     setSelectedTeacher(teacher);
//     setCurrentPage('teacher-details');
//   };

//   // Add DMC for student
//   const addDmc = () => {
//     const { class: className, rollNo, name, fatherName, totalObtained, totalMarks, percentage, grade, position } = dmcStudentInfo;

//     if (!className || !rollNo || !name) {
//       addToast('Please select class and enter student details.', { type: 'error' });
//       return;
//     }

//     // Convert subjects array to object format
//     const subjectsObj = {};
//     dmcSubjects.forEach(subject => {
//       if (subject.obtained && subject.total) {
//         subjectsObj[subject.name] = {
//           obtained: parseInt(subject.obtained),
//           total: parseInt(subject.total),
//           grade: subject.grade || calculateGrade(parseInt(subject.obtained), parseInt(subject.total))
//         };
//       }
//     });

//     setResultsData(prev => {
//       const copy = { ...prev };
//       if (!copy[className]) copy[className] = {};

//       copy[className][rollNo] = {
//         name,
//         rollNo,
//         fatherName,
//         subjects: subjectsObj,
//         totalObtained: parseInt(totalObtained) || calculateTotalObtained(),
//         totalMarks: parseInt(totalMarks) || calculateTotalMarks(),
//         percentage: parseFloat(percentage) || calculatePercentage(),
//         grade: grade || calculateOverallGrade(),
//         position: position || ''
//       };

//       return copy;
//     });

//     // Reset form
//     setDmcSubjects([
//       { name: 'English', obtained: '', total: '', grade: '' },
//       { name: 'Math', obtained: '', total: '', grade: '' },
//       { name: 'Science', obtained: '', total: '', grade: '' },
//       { name: 'Urdu', obtained: '', total: '', grade: '' },
//       { name: 'Islamiat', obtained: '', total: '', grade: '' },
//       { name: 'Social Studies', obtained: '', total: '', grade: '' }
//     ]);

//     setDmcStudentInfo({
//       class: '',
//       rollNo: '',
//       name: '',
//       fatherName: '',
//       totalObtained: 0,
//       totalMarks: 0,
//       percentage: 0,
//       grade: '',
//       position: ''
//     });

//     addToast('DMC added successfully.');
//   };

//     // For DMC management - simplified
//   const [dmcSubjects, setDmcSubjects] = useState([
//     { name: 'English', obtained: '', total: '', grade: '' },
//     { name: 'Math', obtained: '', total: '', grade: '' },
//     { name: 'Science', obtained: '', total: '', grade: '' },
//     { name: 'Urdu', obtained: '', total: '', grade: '' },
//     { name: 'Islamiat', obtained: '', total: '', grade: '' },
//     { name: 'Social Studies', obtained: '', total: '', grade: '' }
//   ]);
//   const [dmcStudentInfo, setDmcStudentInfo] = useState({
//     class: '',
//     rollNo: '',
//     name: '',
//     fatherName: '',
//     totalObtained: 0,
//     totalMarks: 0,
//     percentage: 0,
//     grade: '',
//     position: ''
//   });

//   // Helper functions for DMC calculations
//   const calculateTotalObtained = () => {
//     return dmcSubjects.reduce((total, subject) => total + (parseInt(subject.obtained) || 0), 0);
//   };

//   const calculateTotalMarks = () => {
//     return dmcSubjects.reduce((total, subject) => total + (parseInt(subject.total) || 0), 0);
//   };

//   const calculatePercentage = () => {
//     const totalObtained = calculateTotalObtained();
//     const totalMarks = calculateTotalMarks();
//     return totalMarks > 0 ? (totalObtained / totalMarks) * 100 : 0;
//   };

//   const calculateGrade = (obtained, total) => {
//     if (!obtained || !total) return '';
//     const percentage = (obtained / total) * 100;
//     if (percentage >= 90) return 'A+';
//     if (percentage >= 80) return 'A';
//     if (percentage >= 70) return 'B';
//     if (percentage >= 60) return 'C';
//     if (percentage >= 50) return 'D';
//     return 'F';
//   };

//   const calculateOverallGrade = () => {
//     const percentage = calculatePercentage();
//     if (percentage >= 90) return 'A+';
//     if (percentage >= 80) return 'A';
//     if (percentage >= 70) return 'B';
//     if (percentage >= 60) return 'C';
//     if (percentage >= 50) return 'D';
//     return 'F';
//   };

//   // Auto-calculate when subject marks change
//   useEffect(() => {
//     const totalObtained = calculateTotalObtained();
//     const totalMarks = calculateTotalMarks();
//     const percentage = calculatePercentage();
//     const grade = calculateOverallGrade();

//     setDmcStudentInfo(prev => ({
//       ...prev,
//       totalObtained,
//       totalMarks,
//       percentage,
//       grade
//     }));
//   }, [dmcSubjects]);

//   // Load student info when class and roll number are selected
//   useEffect(() => {
//     if (dmcStudentInfo.class && dmcStudentInfo.rollNo) {
//       const classStudents = studentsData[dmcStudentInfo.class] || [];
//       const student = classStudents.find(s => s.rollNo === dmcStudentInfo.rollNo);

//       if (student) {
//         setDmcStudentInfo(prev => ({
//           ...prev,
//           name: student.name,
//           fatherName: student.fatherName
//         }));
//       }
//     }
//   }, [dmcStudentInfo.class, dmcStudentInfo.rollNo, studentsData]);

//   // Delete DMC
//   const deleteDmc = (className, rollNo) => {
//     addConfirmToast('Delete this DMC?', () => {
//       setResultsData(prev => {
//         const copy = { ...prev };
//         if (copy[className] && copy[className][rollNo]) {
//           delete copy[className][rollNo];
//           // Remove class if empty
//           if (Object.keys(copy[className]).length === 0) {
//             delete copy[className];
//           }
//         }
//         return copy;
//       });
//       addToast('DMC deleted successfully.');
//     }, { duration: 7000 });
//   };

//   // Payment handling (supports full, monthly, half, custom)
//   // This will pay base pendingFee first, then pending extra fees in FIFO order.
//   const handlePayment = (e) => {
//     if (e) e.preventDefault();
//     if (!selectedStudent) return;

//     let amountToPay = 0;
//     if (paymentType === 'full') amountToPay = Number(calculateTotalPendingForStudent(selectedStudent) || 0);
//     else if (paymentType === 'monthly') amountToPay = Number(selectedStudent.monthlyFee || 0);
//     else if (paymentType === 'half') {
//       const pending = Number(calculateTotalPendingForStudent(selectedStudent) || 0);
//       amountToPay = Math.ceil(pending / 2);
//     }
//     else if (paymentType === 'custom') amountToPay = parseInt(customAmount, 10) || 0;

//     if (amountToPay <= 0) {
//       addToast('Please enter a valid payment amount.', { type: 'error' });
//       return;
//     }

//     // compute total pending
//     const totalPending = calculateTotalPendingForStudent(selectedStudent);
//     if (amountToPay > totalPending) {
//       addToast('Payment cannot exceed total pending fee.', { type: 'error' });
//       return;
//     }

//     const updated = { ...studentsData };
//     const classKey = selectedStudent.className || selectedStudent.classKey;
//     const studentIndex = updated[classKey].findIndex(s => s.id === selectedStudent.id);
//     if (studentIndex === -1) {
//       addToast('Student not found in data.', { type: 'error' });
//       return;
//     }

//     const studentRef = { ...updated[classKey][studentIndex] }; // shallow copy
//     let remaining = amountToPay;
//     const feeHistoryAdds = [];

//     // 1) Pay base pendingFee first
//     const basePending = Number(studentRef.pendingFee || 0);
//     if (basePending > 0 && remaining > 0) {
//       const payBase = Math.min(basePending, remaining);
//       studentRef.pendingFee = Math.max(0, basePending - payBase);
//       studentRef.totalPaid = (studentRef.totalPaid || 0) + payBase;
//       remaining -= payBase;
//       feeHistoryAdds.push({
//         month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//         amount: payBase,
//         status: 'Paid',
//         date: new Date().toLocaleDateString(),
//         note: 'Base fee'
//       });
//     }

//     // 2) Then pay extras in FIFO order
//     studentRef.extraFees = studentRef.extraFees || [];
//     for (let i = 0; i < studentRef.extraFees.length && remaining > 0; i++) {
//       const ef = { ...studentRef.extraFees[i] };
//       if (ef.status === 'pending') {
//         const efAmount = Number(ef.amount || 0);
//         if (remaining >= efAmount) {
//           // fully pay this extra
//           ef.status = 'paid';
//           ef.datePaid = new Date().toLocaleDateString();
//           remaining -= efAmount;
//           studentRef.totalPaid = (studentRef.totalPaid || 0) + efAmount;
//           feeHistoryAdds.push({
//             month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//             amount: efAmount,
//             status: 'Paid',
//             date: ef.datePaid,
//             note: ef.label
//           });
//         } else {
//           // partial payment on an extra -> decrease ef.amount and add a payment record
//           ef.amount = Number(efAmount - remaining);
//           // record a paid portion entry in feeHistory
//           const paidPortion = remaining;
//           studentRef.totalPaid = (studentRef.totalPaid || 0) + paidPortion;
//           feeHistoryAdds.push({
//             month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//             amount: paidPortion,
//             status: 'Paid (partial)',
//             date: new Date().toLocaleDateString(),
//             note: ef.label + ' (partial)'
//           });
//           remaining = 0;
//         }
//         studentRef.extraFees[i] = ef;
//       }
//     }

//     // update feeHistory: append entries
//     studentRef.feeHistory = studentRef.feeHistory || [];
//     studentRef.feeHistory.push(...feeHistoryAdds);

//     // update dataset
//     updated[classKey][studentIndex] = studentRef;
//     setStudentsData(updated);

//     // update selectedStudent state to reflect new values
//     setSelectedStudent({ ...studentRef, className: classKey });

//     // clear custom amount
//     setCustomAmount('');
//     setPaymentType('full');
//     addToast(`Payment of Rs. ${amountToPay.toLocaleString()} processed successfully!`);
//   };

//   // ---------- PRINTING (Landscape, 2 students per page, each with School & Student copy) ----------
//   const chunk = (arr, size) => {
//     const out = [];
//     for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//     return out;
//   };

//   const escapeHtml = (str = '') => String(str).replace(/[&<>"']/g, function (m) {
//     return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
//   });

//   const formatPrintCurrency = (n) => `Rs. ${Number(n || 0).toLocaleString()}`;

//   const buildPrintableHtml = (students = [], title = 'IGPS Fee Statements') => {
//     // students array expected to have classKey in each
//     const pages = chunk(students, 2); // 2 students per page
//     return `
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8"/>
// <title>${escapeHtml(title)}</title>
//     <style>
//   @page {
//     size: A4 landscape;
//     margin: 10mm;
//   }
//   html, body {
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     color: #111;
//   }
//   .page {
//     box-sizing: border-box;
//     display: grid;
//     gap:.6rem;
//     height:100%;
//     width:100%;
//     grid-template-columns: repeat(2, 1fr);
//     place-contents: center;
//     margin-bottom: 4rem;
//     margin-top: 2rem;
//     // border: 1px solid black;
//     overflow: hidden;
//     place-items:center;

//   }
//   .student-block {
//     display:flex;
//     flex-direction: column;
//     gap: 1mm;
//     height:100%;
//     border-radius: 8px;
//   }
//   .receipt {
//     border: 2px dashed #888;
//     padding: 3mm;
//     height:310px;
//     width:500px;
//     border-radius: 10px;
//     position: relative;
//     background: #fff;
//     overflow: hidden;
//   }
//   .receipt .watermark {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 280px;
//     opacity: 0.15;
//     transform: translate(-50%, -50%);
//     z-index: 0;
//     pointer-events: none;
//   }
//   .receipt .content { position: relative; z-index: 1; }
//   .header { font-size: 18px; font-weight: bold; color: #0b5ed7; margin-bottom: 2px; }
//   .school-no { font-size: 12px; font-weight: bold; color: #333; margin-bottom: 6px; }
//   .meta { font-size: 12px; color: #555; margin-bottom: 8px; }
//   .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
//   .fee-box { border: 1px solid #ccc; border-radius: 6px; padding: 6px; text-align: center; background: #fff; }
//   .fee-label { font-size: 12px; color: #555; }
//   .fee-value { font-size: 15px; font-weight: bold; margin-top: 4px; }
//   .copy-label { text-align: right; font-size: 11px; color: #888; font-style: italic; }
//   .extras { margin-top:8px; font-size:12px; }
//     </style>
// </head>
// <body>
// ${pages.map(page => `<div class="page">${page.map(s => {
//       // compute base pending + extras pending
//       const basePending = Number(s.pendingFee || 0);
//       const extrasPending = (s.extraFees || []).reduce((acc, ef) => acc + (ef.status === 'pending' ? Number(ef.amount || 0) : 0), 0);
//       const total = (s.monthlyFee || 0) + basePending - 0 + extrasPending; // monthly + pending extras (keeps parity)
//       return `
//         <div class="student-block">
//           <!-- School Copy -->
//           <div class="receipt">
//             <img src="../public/LOGO.jpg" class="watermark" alt="Logo"/>
//             <div class="content">
//               <div class="copy-label">School Copy</div>
//               <div class="header">Iqra Grammar Public School</div>
//               <div class="school-no">Ph: 03365716844</div>
//               <div class="meta">Fee Statement • ${new Date().toLocaleDateString()}</div>
//               <div><b>Student:</b> ${escapeHtml(s.name)} (Roll: ${escapeHtml(s.rollNo || "")})</div>
//               <div><b>Father:</b> ${escapeHtml(s.fatherName || "")}</div>
//               <div><b>Class:</b> ${escapeHtml(s.classKey || "")}</div>
//               <div class="grid">
//                 <div class="fee-box"><div class="fee-label">Monthly Fee</div><div class="fee-value">${formatPrintCurrency(s.monthlyFee)}</div></div>
//                 <div class="fee-box"><div class="fee-label">Pending (Base)</div><div class="fee-value">${formatPrintCurrency(basePending)}</div></div>
//               </div>
//               <div class="extras">
//                 <div><b>Extra Fees:</b></div>
//                 ${(s.extraFees || []).length === 0 ? '<div class="text-muted">None</div>' : (s.extraFees.map(ef => `<div>${escapeHtml(ef.label)}: ${formatPrintCurrency(ef.amount)} ${ef.status === 'paid' ? '(PAID)' : ''}</div>`).join(''))}
//               </div>
//               <div style="margin-top:6px;"><b>Total Due:</b> ${formatPrintCurrency(basePending + extrasPending)}</div>
//             </div>
//           </div>

//           <!-- Student Copy -->
//           <div class="receipt">
//             <img src="../public/LOGO.jpg" class="watermark" alt="Logo"/>
//               <div class="content">
//               <div class="copy-label">Student Copy</div>
//               <div class="header">Iqra Grammar Public School</div>
//               <div class="school-no">Ph: 03365716844</div>
//               <div class="meta">Fee Statement • ${new Date().toLocaleDateString()}</div>
//               <div class="meta">Due date • 5 ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
//               <div><b>Student:</b> ${escapeHtml(s.name)} (Roll: ${escapeHtml(s.rollNo || "")})</div>
//               <div><b>Father:</b> ${escapeHtml(s.fatherName || "")}</div>
//               <div><b>Class:</b> ${escapeHtml(s.classKey || "")}</div>
//              <div class="payment-table">
//   <table>
//     <thead class="table-row-first" style="width:100%;">
//       <tr >
//         <th colspan="2"><h2>Payment Detail</h2></th>
//         <th colspan="2"><h2>Amount</h2></th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th>Monthly Fee</th>
//         <td>${formatPrintCurrency(s.monthlyFee)}</td>
//       </tr>
//       <tr>
//         <th>Pending</th>
//         <td>${formatPrintCurrency(basePending)}</td>
//       </tr>
//       <tr>
//         <th colspan="2"><h3>Extra Fees</h3></th>
//       </tr>
//       <tr>
//         <td colspan="2">
//           ${
//             (s.extraFees || []).length === 0 
//               ? '<div class="text-muted">None</div>' 
//               : s.extraFees.map(
//                   ef => `<div>${escapeHtml(ef.label)}: ${formatPrintCurrency(ef.amount)} ${ef.status === 'paid' ? '(PAID)' : ''}</div>`
//                 ).join('')
//           }
//         </td>
//       </tr>
//       <tr>
//         <th>Total Due</th>
//         <td><b>${formatPrintCurrency(basePending + extrasPending)}</b></td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//         </div>
//       `;
//     }).join('')}</div>`).join('')}
// </body>
// </html>
// `;
//   };

//   // Build DMC printable HTML
//   const buildDmcPrintableHtml = (student = {}) => {
//     return `
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8"/>
// <title>IGPS - DMC</title>
// <style>
//   @page {
//     size: A4 portrait;
//     margin: 15mm;
//   }
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     color: #111;
//     background: #fff;
//   }
//   .dmc-container {
//     width: 100%;
//     max-width: 800px;
//     margin: 0 auto;
//     padding: 20px;
//     border: 2px solid #000;
//     position: relative;
//     min-height: 100vh;
//     box-sizing: border-box;
//   }
//   .watermark {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 300px;
//     opacity: 0.1;
//     transform: translate(-50%, -50%);
//     z-index: 0;
//     pointer-events: none;
//   }
//   .content {
//     position: relative;
//     z-index: 1;
//   }
//   .header {
//     text-align: center;
//     margin-bottom: 20px;
//     border-bottom: 2px solid #000;
//     padding-bottom: 10px;
//   }
//   .school-name {
//     font-size: 24px;
//     font-weight: bold;
//     color: #0b5ed7;
//     margin-bottom: 5px;
//   }
//   .school-address {
//     font-size: 14px;
//     color: #555;
//   }
//   .student-info {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     margin-bottom: 20px;
//   }
//   .info-item {
//     display: flex;
//   }
//   .info-label {
//     font-weight: bold;
//     min-width: 100px;
//   }
//   .results-table {
//     width: 100%;
//     border-collapse: collapse;
//     margin-bottom: 20px;
//   }
//   .results-table th,
//   .results-table td {
//     border: 1px solid #000;
//     padding: 8px;
//     text-align: center;
//   }
//   .results-table th {
//     background-color: #f0f0f0;
//     font-weight: bold;
//   }
//   .summary {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 20px;
//     margin-bottom: 20px;
//   }
//   .summary-item {
//     padding: 10px;
//     border: 1px solid #000;
//     text-align: center;
//   }
//   .summary-value {
//     font-size: 18px;
//     font-weight: bold;
//     margin-top: 5px;
//   }
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: 20px;
//     margin-top: 40px;
//   }
//   .signature {
//     text-align: center;
//     border-top: 1px solid #000;
//     padding-top: 40px;
//   }
//   .footer {
//     text-align: center;
//     margin-top: 30px;
//     font-size: 12px;
//     color: #555;
//   }
//   @media print {
//     .dmc-container {
//       border: none;
//     }
//   }
// </style>
// </head>
// <body>
//   <div class="dmc-container">
//     <img src="../public/LOGO.jpg" class="watermark" alt="School Logo"/>
//     <div class="content">
//       <div class="header">
//         <div class="school-name">IQRA GRAMMAR PUBLIC SCHOOL</div>
//         <div class="school-address">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</div>
//         <div class="school-address">Phone: 03365716844</div>
//         <h2>Detailed Marks Certificate</h2>
//         <div>Academic Year: ${new Date().getFullYear() - 1}-${new Date().getFullYear()}</div>
//       </div>

//       <div class="student-info">
//         <div class="info-item">
//           <span class="info-label">Student Name:</span>
//           <span>${escapeHtml(student.name || '')}</span>
//         </div>
//         <div class="info-item">
//           <span class="info-label">Father Name:</span>
//           <span>${escapeHtml(student.fatherName || '')}</span>
//         </div>
//         <div class="info-item">
//           <span class="info-label">Class:</span>
//           <span>${escapeHtml(student.className || '')}</span>
//         </div>
//         <div class="info-item">
//           <span class="info-label">Roll No:</span>
//           <span>${escapeHtml(student.rollNo || '')}</span>
//         </div>
//       </div>

//       <table class="results-table">
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Obtained Marks</th>
//             <th>Total Marks</th>
//             <th>Percentage</th>
//             <th>Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${student.subjects ? Object.entries(student.subjects).map(([subject, data]) => `
//             <tr>
//               <td>${escapeHtml(subject)}</td>
//               <td>${data.obtained}</td>
//               <td>${data.total}</td>
//               <td>${((data.obtained / data.total) * 100).toFixed(2)}%</td>
//               <td>${data.grade}</td>
//             </tr>
//           `).join('') : ''}
//         </tbody>
//       </table>

//       <div class="summary">
//         <div class="summary-item">
//           <div>Total Obtained Marks</div>
//           <div class="summary-value">${student.totalObtained || 0}</div>
//         </div>
//         <div class="summary-item">
//           <div>Total Marks</div>
//           <div class="summary-value">${student.totalMarks || 0}</div>
//         </div>
//         <div class="summary-item">
//           <div>Percentage</div>
//           <div class="summary-value">${student.percentage ? student.percentage.toFixed(2) + '%' : '0%'}</div>
//         </div>
//         <div class="summary-item">
//           <div>Overall Grade</div>
//           <div class="summary-value">${student.grade || 'N/A'}</div>
//         </div>
//         <div class="summary-item">
//           <div>Position in Class</div>
//           <div class="summary-value">${student.position || 'N/A'}</div>
//         </div>
//         <div class="summary-item">
//           <div>Remarks</div>
//           <div class="summary-value">${student.percentage >= 80 ? 'Excellent' : student.percentage >= 70 ? 'Good' : student.percentage >= 60 ? 'Average' : 'Needs Improvement'}</div>
//         </div>
//       </div>

//       <div class="signatures">
//         <div class="signature">
//           <div>Class Teacher</div>
//         </div>
//         <div class="signature">
//           <div>Principal</div>
//         </div>
//         <div class="signature">
//           <div>Parent/Guardian</div>
//         </div>
//       </div>

//       <div class="footer">
//         <p>Generated on: ${new Date().toLocaleDateString()}</p>
//         <p>© ${new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
//       </div>
//     </div>
//   </div>
// </body>
// </html>
// `;
//   };

//   // Build Leaving Certificate printable HTML
//   const buildLeavingCertificateHtml = (student = {}) => {
//     return `
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8"/>
// <title>IGPS - Leaving Certificate</title>
// <style>
//   @page {
//     size: A4 portrait;
//     margin: 15mm;
//   }
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Times New Roman', serif;
//     color: #000;
//     background: #fff;
//     line-height: 1.6;
//   }
//   .certificate-container {
//     width: 100%;
//     max-width: 800px;
//     margin: 0 auto;
//     padding: 30px;
//     border: 2px solid #000;
//     position: relative;
//     min-height: 100vh;
//     box-sizing: border-box;
//   }
//   .watermark {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 400px;
//     opacity: 0.1;
//     transform: translate(-50%, -50%);
//     z-index: 0;
//     pointer-events: none;
//   }
//   .content {
//     position: relative;
//     z-index: 1;
//   }
//   .header {
//     text-align: center;
//     margin-bottom: 30px;
//     border-bottom: 2px solid #000;
//     padding-bottom: 20px;
//   }
//   .school-name {
//     font-size: 28px;
//     font-weight: bold;
//     text-transform: uppercase;
//     margin-bottom: 10px;
//     letter-spacing: 2px;
//   }
//   .school-address {
//     font-size: 16px;
//     margin-bottom: 5px;
//   }
//   .certificate-title {
//     font-size: 24px;
//     font-weight: bold;
//     text-decoration: underline;
//     margin: 30px 0;
//     text-align: center;
//   }
//   .certificate-text {
//     font-size: 18px;
//     text-align: justify;
//     margin-bottom: 20px;
//   }
//   .student-details {
//     margin: 30px 0;
//     padding: 20px;
//     border: 1px solid #000;
//     background: #f9f9f9;
//   }
//   .detail-row {
//     display: flex;
//     margin-bottom: 10px;
//   }
//   .detail-label {
//     font-weight: bold;
//     min-width: 150px;
//   }
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 40px;
//     margin-top: 60px;
//   }
//   .signature {
//     text-align: center;
//     border-top: 1px solid #000;
//     padding-top: 60px;
//   }
//   .signature-name {
//     font-weight: bold;
//     margin-top: 10px;
//   }
//   .footer {
//     text-align: center;
//     margin-top: 40px;
//     font-size: 14px;
//     color: #555;
//   }
//   .seal {
//     position: absolute;
//     right: 50px;
//     bottom: 100px;
//     width: 120px;
//     opacity: 0.8;
//   }
//   @media print {
//     .certificate-container {
//       border: none;
//     }
//   }
// </style>
// </head>
// <body>
//   <div class="certificate-container">
//     <img src="../public/LOGO.jpg" class="watermark" alt="School Logo"/>

//     <div class="content">
//       <div class="header">
//         <div class="school-name">IQRA GRAMMAR PUBLIC SCHOOL</div>
//         <div class="school-address">Gulshan Hameed Colony, Opposite Wensum College</div>
//         <div class="school-address">Dera Ismail Khan, KPK, Pakistan</div>
//         <div class="school-address">Phone: 03365716844 | Email: igps44@gmail.com</div>
//       </div>

//       <div class="certificate-title">LEAVING CERTIFICATE</div>

//       <div class="certificate-text">
//         This is to certify that <span class="font-bold">${escapeHtml(student.name || '[Student Name]')}</span>, 
//         son/daughter of <span class="font-bold">${escapeHtml(student.fatherName || '[Father Name]')}</span>, 
//         was a bona fide student of this school from <span class="font-bold">[Admission Date]</span> 
//         to <span class="font-bold">[Leaving Date]</span>.
//       </div>

//       <div class="certificate-text">
//         He/She was studying in class <span class="font-bold">${escapeHtml(student.className || '[Class]')}</span> 
//         and his/her roll number was <span class="font-bold">${escapeHtml(student.rollNo || '[Roll Number]')}</span>.
//       </div>

//       <div class="certificate-text">
//         His/Her conduct during the stay in the school was <span class="font-bold">[Conduct]</span> 
//         and he/she has shown <span class="font-bold">[Academics Performance]</span> in studies.
//       </div>

//       <div class="certificate-text">
//         He/She has paid all the dues of the school and has no outstanding amount against him/her.
//       </div>

//       <div class="certificate-text">
//         We wish him/her success in all future endeavors.
//       </div>

//       <div class="student-details">
//         <div class="detail-row">
//           <span class="detail-label">Certificate Number:</span>
//           <span>IGPS/LC/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}</span>
//         </div>
//         <div class="detail-row">
//           <span class="detail-label">Date of Issue:</span>
//           <span>${new Date().toLocaleDateString()}</span>
//         </div>
//         <div class="detail-row">
//           <span class="detail-label">Reason for Leaving:</span>
//           <span>[Reason]</span>
//         </div>
//       </div>

//       <div class="signatures">
//         <div class="signature">
//           <div>_________________________</div>
//           <div class="signature-name">Class Teacher</div>
//           <div>${escapeHtml(student.className || '[Class]')}</div>
//         </div>
//         <div class="signature">
//           <div>_________________________</div>
//           <div class="signature-name">Principal</div>
//           <div>Iqra Grammar Public School</div>
//         </div>
//       </div>

//       <div class="footer">
//         <p>Note: This is a computer generated certificate and does not require signature.</p>
//         <p>© ${new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
//       </div>

//       <img src="../public/LOGO.jpg" class="seal" alt="School Seal"/>
//     </div>
//   </div>
// </body>
// </html>
// `;
//   };

//   const openPrintWindow = (html) => {
//     const newWin = window.open('', '_blank');
//     if (!newWin) {
//       addToast('Popup blocked — allow popups to print.', { type: 'error', duration: 3000 });
//       return;
//     }
//     newWin.document.open();
//     newWin.document.write(html);
//     newWin.document.close();
//     // small delay to let fonts / layout settle
//     setTimeout(() => {
//       newWin.focus();
//       newWin.print();
//       // do not close automatically — let user decide
//     }, 500);
//   };

//   // Print single student (renders one student in printable HTML)
//   const handleOpenPrintable = () => {
//     if (!selectedStudent) {
//       addToast('Nothing to print', { type: 'error' });
//       return;
//     }
//     const html = buildPrintableHtml([{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }], 'IGPS - Student Fee Statement');
//     openPrintWindow(html);
//   };

//   // Print DMC
//   const handlePrintDmc = () => {
//     if (!selectedStudent) {
//       addToast('Nothing to print', { type: 'error' });
//       return;
//     }
//     const html = buildDmcPrintableHtml(selectedStudent);
//     openPrintWindow(html);
//   };

//   // Print Leaving Certificate
//   const handlePrintLeavingCertificate = () => {
//     if (!selectedStudent) {
//       addToast('Please select a student first', { type: 'error' });
//       return;
//     }
//     const html = buildLeavingCertificateHtml(selectedStudent);
//     openPrintWindow(html);
//   };

//   // Print all students of a class (2 per page)
//   const handlePrintClass = (classKey) => {
//     const arr = (studentsData[classKey] || []).map(s => ({ ...s, classKey }));
//     if (!arr.length) {
//       addToast('No students in this class.', { type: 'error' });
//       return;
//     }
//     const html = buildPrintableHtml(arr, `IGPS - ${classKey} Fee Statements`)
//     openPrintWindow(html);
//   };

//   // Admin search (live)
//   const getFilteredStudents = () => {
//     if (!searchTerm) return [];
//     const all = getAllStudents();
//     return all.filter(s =>
//       s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (s.fatherName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (s.rollNo || '').includes(searchTerm) ||
//       (s.classKey || '').includes(searchTerm)
//     );
//   };

// //   const getFilteredStudents = () => {
// //   const all = getAllStudents();

// //   // If searchTerm is empty, return all students
// //   if (!searchTerm || searchTerm.trim() === "") {
// //     return all;
// //   }

// //   const term = searchTerm.toLowerCase();

// //   return all.filter(s =>
// //     (s.name || "").toLowerCase().includes(term) ||
// //     (s.fatherName || "").toLowerCase().includes(term) ||
// //     (s.rollNo || "").toLowerCase().includes(term) ||
// //     (s.classKey || "").toLowerCase().includes(term)
// //   );
// // };

//   // Download currently shown printable area as HTML file
//   const handleDownloadHtml = () => {
//     if (!selectedStudent && Object.keys(studentsData).length === 0) {
//       addToast('Nothing to download', { type: 'error' });
//       return;
//     }

//     // If a student is selected, download that student only; otherwise download whole data
//     const toDownload = selectedStudent ? [{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }] : getAllStudents();
//     const html = buildPrintableHtml(toDownload, 'igps-fee-statements');
//     const blob = new Blob([html], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-fee' : 'igps-fee-statements') + '.html';
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//     addToast('Downloaded HTML');
//   };

//   // Download DMC as HTML
//   const handleDownloadDmc = () => {
//     if (!selectedStudent) {
//       addToast('Nothing to download', { type: 'error' });
//       return;
//     }

//     const html = buildDmcPrintableHtml(selectedStudent);
//     const blob = new Blob([html], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-dmc' : 'igps-dmc') + '.html';
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//     addToast('DMC downloaded');
//   };

//   // Download Leaving Certificate as HTML
//   const handleDownloadLeavingCertificate = () => {
//     if (!selectedStudent) {
//       addToast('Please select a student first', { type: 'error' });
//       return;
//     }

//     const html = buildLeavingCertificateHtml(selectedStudent);
//     const blob = new Blob([html], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-leaving-cert' : 'igps-leaving-cert') + '.html';
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//     addToast('Leaving Certificate downloaded');
//   };

//   // Update subject field in DMC form
//   const updateDmcSubject = (index, field, value) => {
//     const updatedSubjects = [...dmcSubjects];
//     updatedSubjects[index] = {
//       ...updatedSubjects[index],
//       [field]: value
//     };

//     // Auto-calculate grade if obtained and total are provided
//     if (field === 'obtained' || field === 'total') {
//       const obtained = parseInt(updatedSubjects[index].obtained) || 0;
//       const total = parseInt(updatedSubjects[index].total) || 0;

//       if (obtained > 0 && total > 0) {
//         updatedSubjects[index].grade = calculateGrade(obtained, total);
//       }
//     }

//     setDmcSubjects(updatedSubjects);
//   };

//   // Add new subject field
//   const addNewSubject = () => {
//     setDmcSubjects([...dmcSubjects, { name: '', obtained: '', total: '', grade: '' }]);
//   };

//   // Remove subject field
//   const removeSubject = (index) => {
//     if (dmcSubjects.length > 1) {
//       const updatedSubjects = [...dmcSubjects];
//       updatedSubjects.splice(index, 1);
//       setDmcSubjects(updatedSubjects);
//     }
//   };

//   // Basic Navigation component
//   // const Navigation = () => (
//   //   <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
//   //     <div className="container mx-auto px-4">
//   //       <div className="flex items-center justify-between h-16">
//   //         <div className="flex items-center space-x-3">
//   //           <School className="h-8 w-8" />
//   //           <div>
//   //             <span className="font-bold text-xl">IGPS</span>
//   //             <p className="text-xs text-blue-100">Iqra Grammar Public School</p>
//   //           </div>
//   //         </div>
//   //         <div className="flex space-x-4">
//   //           <button onClick={() => setCurrentPage('home')} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//   //             <Home className="h-4 w-4" />
//   //             <span>Home</span>
//   //           </button>
//   //           <button onClick={() => setCurrentPage('about')} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//   //             <BookOpen className="h-4 w-4" />
//   //             <span>About</span>
//   //           </button>
//   //           <button onClick={() => setCurrentPage('contact')} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//   //             <Phone className="h-4 w-4" />
//   //             <span>Contact</span>
//   //           </button>
//   //           <button onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//   //             <DollarSign className="h-4 w-4" />
//   //             <span>Fees</span>
//   //           </button>
//   //           <button onClick={() => { setCurrentPage('dmc'); setUserType(''); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//   //             <FileText className="h-4 w-4" />
//   //             <span>DMC</span>
//   //           </button>

//   //           {!isAdminLoggedIn ? (
//   //             <button onClick={() => setCurrentPage('admin-login')} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//   //               <Settings className="h-4 w-4" />
//   //               <span>Admin</span>
//   //             </button>
//   //           ) : (
//   //             <>
//   //               <button onClick={() => setCurrentPage('admin-dashboard')} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//   //                 <Settings className="h-4 w-4" />
//   //                 <span>Dashboard</span>
//   //               </button>
//   //               <button onClick={() => setCurrentPage('admin-search')} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//   //                 <Search className="h-4 w-4" />
//   //                 <span>Search</span>
//   //               </button>
//   //               <button onClick={() => setCurrentPage('leaving-certificate')} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//   //                 <FileText className="h-4 w-4" />
//   //                 <span>Leaving Cert</span>
//   //               </button>
//   //               <button onClick={() => { setIsAdminLoggedIn(false); setCurrentPage('home'); setLoginForm({ username: '', password: '' }); }} className="hover:text-red-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700">
//   //                 <LogOut className="h-4 w-4" />
//   //                 <span>Logout</span>
//   //               </button>
//   //             </>
//   //           )}
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </nav>
//   // );

//   // Basic Navigation component with mobile toggle
// // Basic Navigation component with mobile toggle
// const Navigation = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg nav-container">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center space-x-3">
//             <School className="h-8 w-8" />
//             <div>
//               <span className="font-bold text-xl">IGPS</span>
//               <p className="text-xs text-blue-100">Iqra Grammar Public School</p>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button 
//             className="mobile-menu-button md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>

//           <div className={`nav-items md:flex space-x-4 ${isMobileMenuOpen ? 'open' : ''}`}>
//             <button onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//               <Home className="h-4 w-4" />
//               <span>Home</span>
//             </button>
//             <button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//               <BookOpen className="h-4 w-4" />
//               <span>About</span>
//             </button>
//             <button onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//             </button>
//             <button onClick={() => { setCurrentPage('fees'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//               <DollarSign className="h-4 w-4" />
//               <span>Fees</span>
//             </button>
//             <button onClick={() => { setCurrentPage('dmc'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//               <FileText className="h-4 w-4" />
//               <span>DMC</span>
//             </button>

//             {!isAdminLoggedIn ? (
//               <button onClick={() => { setCurrentPage('admin-login'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                 <Settings className="h-4 w-4" />
//                 <span>Admin</span>
//               </button>
//             ) : (
//               <>
//                 <button onClick={() => { setCurrentPage('admin-dashboard'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                   <Settings className="h-4 w-4" />
//                   <span>Dashboard</span>
//                 </button>
//                 <button onClick={() => { setCurrentPage('admin-search'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                   <Search className="h-4 w-4" />
//                   <span>Search</span>
//                 </button>
//                 <button onClick={() => { setCurrentPage('StudentProfile'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                   <FileText className="h-4 w-4" />
//                   <span>Student Prof</span>
//                 </button>
//                 <button onClick={() => { setCurrentPage('leaving-certificate'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                   <FileText className="h-4 w-4" />
//                   <span>Leaving Cert</span>
//                 </button>
//                 <button onClick={() => { setIsAdminLoggedIn(false); setCurrentPage('home'); setLoginForm({ username: '', password: '' }); setIsMobileMenuOpen(false); }} className="hover:text-red-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700">
//                   <LogOut className="h-4 w-4" />
//                   <span>Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigation />

//       {/* Toast container (top-right) */}
//       <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
//         {toasts.map(t => {
//           const bg = t.type === 'error' ? 'bg-red-600' : (t.type === 'confirm' ? 'bg-yellow-500' : 'bg-green-600');
//           return (
//             <div key={t.id} className={`${bg} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm animate-slideIn`}>
//               <div className="flex items-center justify-between gap-3">
//                 <div className="text-sm">{t.message}</div>
//                 {t.confirm ? (
//                   <div className="flex gap-2">
//                     <button onClick={() => { t.onConfirm && t.onConfirm(); removeToast(t.id); }} className="bg-white text-black px-2 py-1 rounded text-sm">Yes</button>
//                     <button onClick={() => removeToast(t.id)} className="bg-white text-black px-2 py-1 rounded text-sm">No</button>
//                   </div>
//                 ) : (
//                   <button onClick={() => removeToast(t.id)} className="text-white opacity-90 text-sm">✕</button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* HOME */}
//       {currentPage === 'home' && (
//         <div className="container mx-auto px-4 py-12">
//         <Slider />
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-8 text-gray-800">Quick Access</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center space-x-2 transition-colors">
//                 <DollarSign className="h-5 w-5" />
//                 <span>Check Fees</span>
//               </button>
//               <button onClick={() => { setCurrentPage('dmc'); setUserType(''); }} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 flex items-center space-x-2 transition-colors">
//                 <FileText className="h-5 w-5" />
//                 <span>Check Results</span>
//               </button>
//               <button onClick={() => setCurrentPage('about')} className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition-colors">
//                 <BookOpen className="h-5 w-5" />
//                 <span>Learn More</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ABOUT */}
//       {currentPage === 'about' && (
//         <div className="container mx-auto px-4 py-12 max-w-6xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About IGPS</h1>

//           <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div>
//                 <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Story</h2>
//                 <p className="text-lg text-gray-700 mb-6 leading-relaxed">Iqra Grammar Public School has been a beacon of educational excellence for over two decades. Founded with the vision to provide quality education to all segments of society, our institution is committed to nurturing both academic achievement and character development.</p>
//                 <p className="text-lg text-gray-700 leading-relaxed">We believe in creating an environment where students can explore their potential, develop critical thinking skills, and prepare for the challenges of tomorrow through a balanced approach to education.</p>
//               </div>
//               <div className="bg-blue-50 p-8 rounded-lg">
//                 <School className="h-20 w-20 text-blue-600 mx-auto mb-6" />
//                 <h3 className="text-2xl font-semibold text-center mb-4">School Statistics</h3>
//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-blue-600">500+</div>
//                     <div className="text-sm text-gray-600">Students</div>
//                   </div>
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-green-600">25+</div>
//                     <div className="text-sm text-gray-600">Teachers</div>
//                   </div>
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-purple-600">15+</div>
//                     <div className="text-sm text-gray-600">Classes</div>
//                   </div>
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-orange-600">20+</div>
//                     <div className="text-sm text-gray-600">Years</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-blue-50 p-8 rounded-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
//               <p className="text-gray-700 leading-relaxed">To be a leading educational institution that empowers students to become confident, creative, and responsible global citizens who contribute positively to society through knowledge, skills, and ethical values.</p>
//             </div>
//             <div className="bg-green-50 p-8 rounded-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h3>
//               <p className="text-gray-700 leading-relaxed">To provide exceptional education through innovative teaching methodologies, character building programs, and fostering a love for lifelong learning in a supportive and inclusive environment.</p>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-10 mt-12">
//             <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose IGPS?</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="flex items-start space-x-4">
//                 <Award className="h-8 w-8 text-blue-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Academic Excellence</h4>
//                   <p className="text-gray-600">Consistent outstanding results in board examinations</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <User className="h-8 w-8 text-green-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Qualified Teachers</h4>
//                   <p className="text-gray-600">Highly educated and experienced teaching staff</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <BarChart3 className="h-8 w-8 text-purple-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Modern Curriculum</h4>
//                   <p className="text-gray-600">Balanced curriculum with focus on STEM and arts</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <BookOpen className="h-8 w-8 text-red-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Library Resources</h4>
//                   <p className="text-gray-600">Well-stocked library with digital resources</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <GraduationCap className="h-8 w-8 text-orange-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Career Guidance</h4>
//                   <p className="text-gray-600">Comprehensive career counseling for students</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Settings className="h-8 w-8 text-indigo-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Technology Integration</h4>
//                   <p className="text-gray-600">Smart classrooms and computer lab facilities</p>
//                 </div>
//               </div>
//             </div>
//             </div>
//         </div>
//       )}

//       {/* CONTACT */}
//       {currentPage === 'contact' && (
//         <div className="container mx-auto px-4 py-12 max-w-6xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Us</h1>

//           <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
//             <div className="grid lg:grid-cols-2 gap-12">
//               <div>
//                 <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
//                     <Phone className="h-8 w-8 text-blue-600" />
//                     <div>
//                       <p className="font-semibold text-lg">Phone</p>
//                       <p className="text-gray-700">+92 3365716844</p>
//                       <p className="text-gray-700">+92 3335333946</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
//                     <BookOpen className="h-8 w-8 text-green-600" />
//                     <div>
//                       <p className="font-semibold text-lg">Email</p>
//                       <p className="text-gray-700">IGPS44@gmail.com</p>
//                       <p className="text-gray-700">info@igps.edu.pk</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
//                     <Home className="h-8 w-8 text-purple-600 mt-1" />
//                     <div>
//                       <p className="font-semibold text-lg">Address</p>
//                       <p className="text-gray-700">Main campus Gulshan hameed colony</p>
//                       <p className="text-gray-700">Opposite wensum college</p>
//                       <p className="text-gray-700">Dera Ismail khan, KPK, Pakistan</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-3xl font-semibold mb-8">Office Hours</h2>
//                 <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
//                   <div className="flex justify-between py-3 border-b">
//                     <span className="font-semibold">Monday - Thursday:</span>
//                     <span className="text-gray-700">8:00 AM - 3:00 PM</span>
//                   </div>
//                   <div className="flex justify-between py-3 border-b">
//                     <span className="font-semibold">Friday:</span>
//                     <span className="text-gray-700">8:00 AM - 12:00 PM</span>
//                   </div>
//                   <div className="flex justify-between py-3 border-b">
//                     <span className="font-semibold">Saturday:</span>
//                     <span className="text-gray-700">9:00 AM - 12:00 PM</span>
//                   </div>
//                   <div className="flex justify-between py-3">
//                     <span className="font-semibold">Sunday:</span>
//                     <span className="text-red-600">Closed</span>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h3 className="text-xl font-semibold mb-4">School Leadership</h3>
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                       <span className="font-medium">Principal:</span>
//                       <span className="text-gray-700">Mr. Muhammad Ali</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                       <span className="font-medium">Vice Principal:</span>
//                       <span className="text-gray-700">Ms. Fatima Khan</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                       <span className="font-medium">Academic Coordinator:</span>
//                       <span className="text-gray-700">Mr. Ahmed Hassan</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-10">
//             <h2 className="text-3xl font-semibold mb-8 text-center">Location Map</h2>
//             <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
//               <div className="text-center">
//                 <Home className="h-12 w-12 text-gray-500 mx-auto mb-4" />
//                 <p className="text-gray-600">Map would be displayed here</p>
//                 <p className="text-sm text-gray-500 mt-2">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</p>
//               </div>
//             </div>
//             </div>
//         </div>
//       )}

//       {/* DMC - choice page */}
//       {currentPage === 'dmc' && !userType && (
//         <div className="container mx-auto px-4 py-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Results (DMC)</h1>
//           <div className="max-w-md mx-auto">
//             <div className="bg-white rounded-xl shadow-lg p-10">
//               <h2 className="text-2xl font-semibold mb-8 text-center">Check Your Results</h2>
//               <div className="space-y-6">
//                 <button onClick={() => { setUserType('student'); setCurrentPage('dmc'); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center justify-center space-x-3">
//                   <FileText className="h-6 w-6" />
//                   <span className="text-lg font-semibold">View DMC</span>
//                 </button>
//                 <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 flex items-center justify-center space-x-3">
//                   <Settings className="h-6 w-6" />
//                   <span className="text-lg font-semibold">Administration</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* DMC - student form */}
//       {currentPage === 'dmc' && userType === 'student' && (
//         <div className="container mx-auto px-4 py-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student DMC Portal</h1>
//           <div className="max-w-md mx-auto">
//             <div className="bg-white rounded-xl shadow-lg p-10">
//               <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
//               <form onSubmit={handleDmcSearch} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
//                   <input type="text" placeholder="Full Name" value={studentInfo.name} onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
//                   <select value={studentInfo.class} onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none">
//                     <option value="">Select Class</option>
//                     {Object.keys(studentsData).map(k => (
//                       <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
//                   <input type="text" placeholder="Roll Number" value={studentInfo.rollNo} onChange={(e) => setStudentInfo({ ...studentInfo, rollNo: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//                 </div>
//                 <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold">View DMC</button>
//               </form>

//               <div className="mt-4">
//                 <button onClick={() => { setUserType(''); setStudentInfo({ name: '', class: '', rollNo: '' }); setCurrentPage('dmc'); }} className="text-sm text-gray-600">Go back</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* STUDENT DMC DETAIL */}
//       {currentPage === 'student-dmc' && selectedStudent && selectedStudent.hasDmc && (
//         <div className="container mx-auto px-4 py-12">
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-xl shadow-lg">
//               <div ref={printRef} className="p-10">
//                 <div className="text-center border-b pb-8 mb-8">
//                   <div className="flex items-center justify-center space-x-3 mb-4">
//                     <School className="h-12 w-12 text-blue-600" />
//                     <div>
//                       <h1 className="text-3xl font-bold text-blue-600">IGPS</h1>
//                       <p className="text-gray-600">Iqra Grammar Public School</p>
//                     </div>
//                   </div>
//                   <h2 className="text-2xl font-semibold">Detailed Marks Certificate</h2>
//                   <p className="text-gray-500">Academic Year: {new Date().getFullYear() - 1}-{new Date().getFullYear()}</p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6 mb-8">
//                   <div className="space-y-3">
//                     <div>
//                       <p className="font-semibold text-gray-700">Student Name:</p>
//                       <p className="text-lg">{selectedStudent.name}</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-700">Father Name:</p>
//                       <p className="text-lg">{selectedStudent.fatherName}</p>
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     <div>
//                       <p className="font-semibold text-gray-700">Class:</p>
//                       <p className="text-lg">{(selectedStudent.className || selectedStudent.classKey || '').replace('-', ' ').toUpperCase()}</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold textGray-700">Roll Number:</p>
//                       <p className="text-lg">{selectedStudent.rollNo}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <h3 className="text-xl font-semibold mb-4">Subject-wise Results</h3>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border border-gray-300">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
//                           <th className="border border-gray-300 px-4 py-2 text-center">Obtained Marks</th>
//                           <th className="border border-gray-300 px-4 py-2 text-center">Total Marks</th>
//                           <th className="border border-gray-300 px-4 py-2 text-center">Percentage</th>
//                           <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {selectedStudent.subjects && Object.entries(selectedStudent.subjects).map(([subject, data]) => (
//                           <tr key={subject}>
//                             <td className="border border-gray-300 px-4 py-2 font-medium">{subject}</td>
//                             <td className="border border-gray-300 px-4 py-2 text-center">{data.obtained}</td>
//                             <td className="border border-gray-300 px-4 py-2 text-center">{data.total}</td>
//                             <td className="border border-gray-300 px-4 py-2 text-center">{((data.obtained / data.total) * 100).toFixed(2)}%</td>
//                             <td className="border border-gray-300 px-4 py-2 text-center font-semibold">{data.grade}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
//                   <h3 className="text-2xl font-semibold mb-6 text-center">Result Summary</h3>
//                   <div className="grid md:grid-cols-3 gap-6 text-center">
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Total Obtained Marks</p>
//                       <p className="text-2xl font-bold text-blue-600">{selectedStudent.totalObtained || 0}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Total Marks</p>
//                       <p className="text-2xl font-bold text-green-600">{selectedStudent.totalMarks || 0}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Percentage</p>
//                       <p className="text-2xl font-bold text-purple-600">{selectedStudent.percentage ? selectedStudent.percentage.toFixed(2) + '%' : '0%'}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Overall Grade</p>
//                       <p className="text-2xl font-bold text-orange-600">{selectedStudent.grade || 'N/A'}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Position in Class</p>
//                       <p className="text-2xl font-bold text-red-600">{selectedStudent.position || 'N/A'}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Remarks</p>
//                       <p className="text-2xl font-bold text-indigo-600">
//                         {selectedStudent.percentage >= 80 ? 'Excellent' : 
//                          selectedStudent.percentage >= 70 ? 'Good' : 
//                          selectedStudent.percentage >= 60 ? 'Average' : 'Needs Improvement'}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8">
//                   <div className="text-center">
//                     <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{width: '80%'}}>
//                       <p className="font-semibold">Class Teacher</p>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{width: '80%'}}>
//                       <p className="font-semibold">Principal</p>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{width: '80%'}}>
//                       <p className="font-semibold">Parent/Guardian</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="text-center mt-8 text-sm text-gray-500">
//                   <p>Generated on: {new Date().toLocaleDateString()}</p>
//                   <p>© {new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
//                 </div>
//               </div>

//               <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                 <div className="flex items-center gap-3">
//                   <button onClick={handlePrintDmc} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print DMC</button>
//                   <button onClick={handleDownloadDmc} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download DMC</button>
//                 </div>

//                 <button onClick={() => { setSelectedStudent(null); setCurrentPage('dmc'); setUserType(''); }} className="px-4 py-2 border rounded-lg">Back to Search</button>
//                 {isAdminLoggedIn && (
//                   <button onClick={() => { setDmcStudentInfo({ 
//                     class: selectedStudent.className || selectedStudent.classKey, 
//                     rollNo: selectedStudent.rollNo,
//                     name: selectedStudent.name,
//                     fatherName: selectedStudent.fatherName,
//                     totalObtained: selectedStudent.totalObtained || 0,
//                     totalMarks: selectedStudent.totalMarks || 0,
//                     percentage: selectedStudent.percentage || 0,
//                     grade: selectedStudent.grade || '',
//                     position: selectedStudent.position || ''
//                   }); 
//                   setDmcSubjects(selectedStudent.subjects ? Object.entries(selectedStudent.subjects).map(([name, data]) => ({
//                     name,
//                     obtained: data.obtained.toString(),
//                     total: data.total.toString(),
//                     grade: data.grade
//                   })) : [
//                     { name: 'English', obtained: '', total: '', grade: '' },
//                     { name: 'Math', obtained: '', total: '', grade: '' },
//                     { name: 'Science', obtained: '', total: '', grade: '' },
//                     { name: 'Urdu', obtained: '', total: '', grade: '' },
//                     { name: 'Islamiat', obtained: '', total: '', grade: '' },
//                     { name: 'Social Studies', obtained: '', total: '', grade: '' }
//                   ]);
//                   setCurrentPage('admin-dmc'); }} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Edit DMC</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* FEES - choice page */}
//       {currentPage === 'fees' && !userType && (
//         <div className="container mx-auto px-4 py-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fee Management</h1>
//           <div className="max-w-md mx-auto">
//             <div className="bg-white rounded-xl shadow-lg p-10">
//               <h2 className="text-2xl font-semibold mb-8 text-center">Select User Type</h2>
//               <div className="space-y-6">
//                 <button onClick={() => { setUserType('student'); setCurrentPage('fees'); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center justify-center space-x-3">
//                   <User className="h-6 w-6" />
//                   <span className="text-lg font-semibold">Student</span>
//                 </button>
//                 <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 flex items-center justify-center space-x-3">
//                   <Settings className="h-6 w-6" />
//                   <span className="text-lg font-semibold">Administration</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* FEES - student form */}
//       {currentPage === 'fees' && userType === 'student' && (
//         <div className="container mx-auto px-4 py-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Fee Information</h1>
//           <div className="max-w-md mx-auto">
//             <div className="bg-white rounded-xl shadow-lg p-10">
//               <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
//               <form onSubmit={handleStudentSearch} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
//                   <input type="text" placeholder="Full Name" value={studentInfo.name} onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
//                   <select value={studentInfo.class} onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none">
//                     <option value="">Select Class</option>
//                     {Object.keys(studentsData).map(k => (
//                       <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
//                   <input type="text" placeholder="Roll Number" value={studentInfo.rollNo} onChange={(e) => setStudentInfo({ ...studentInfo, rollNo: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//                 </div>
//                 <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold">Check Fee Status</button>
//               </form>

//               <div className="mt-4">
//                 <button onClick={() => { setUserType(''); setStudentInfo({ name: '', class: '', rollNo: '' }); setCurrentPage('fees'); }} className="text-sm text-gray-600">Go back</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* STUDENT FEE DETAIL */}
//       {currentPage === 'student-fee-detail' && selectedStudent && (
//         <div className="container mx-auto px-4 py-12">
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-xl shadow-lg">
//               <div ref={printRef} className="p-10">
//                 <div className="text-center border-b pb-8 mb-8">
//                   <div className="flex items-center justify-center space-x-3 mb-4">
//                     <School className="h-12 w-12 text-blue-600" />
//                     <div>
//                       <h1 className="text-3xl font-bold text-blue-600">IGPS</h1>
//                       <p className="text-gray-600">Iqra Grammar Public School</p>
//                     </div>
//                   </div>
//                   <h2 className="text-2xl font-semibold">Fee Statement</h2>
//                   <p className="text-gray-500">Generated on: {new Date().toLocaleDateString()}</p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6 mb-8">
//                   <div className="space-y-3">
//                     <div>
//                       <p className="font-semibold text-gray-700">Student Name:</p>
//                       <p className="text-lg">{selectedStudent.name}</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-700">Father Name:</p>
//                       <p className="text-lg">{selectedStudent.fatherName}</p>
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     <div>
//                       <p className="font-semibold text-gray-700">Class:</p>
//                       <p className="text-lg">{(selectedStudent.className || selectedStudent.classKey || '').replace('-', ' ').toUpperCase()}</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold textGray-700">Roll Number:</p>
//                       <p className="text-lg">{selectedStudent.rollNo}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
//                   <h3 className="text-2xl font-semibold mb-6 text-center">Fee Details</h3>
//                   <div className="grid md:grid-cols-3 gap-6 text-center">
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Monthly Fee</p>
//                       <p className="text-2xl font-bold text-blue-600">{formatCurrency(selectedStudent.monthlyFee)}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Pending Fee</p>
//                       <p className="text-2xl font-bold text-red-600">{formatCurrency(calculateTotalPendingForStudent(selectedStudent))}</p>
//                     </div>
//                     <div className="bg-white p-4 rounded-lg shadow">
//                       <p className="text-sm font-medium text-gray-600">Total Paid</p>
//                       <p className="text-2xl font-bold text-green-600">{formatCurrency(selectedStudent.totalPaid)}</p>
//                     </div>
//                   </div>
//                   <div className="text-center mt-6">
//                     <p className={`text-lg font-bold ${(calculateTotalPendingForStudent(selectedStudent) || 0) > 0 ? 'text-red-600' : 'text-green-600'}`}>
//                       Status: {(calculateTotalPendingForStudent(selectedStudent) || 0) > 0 ? 'Fee Pending' : 'All Fees Paid'}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <h3 className="text-xl font-semibold mb-4">Extra Fees</h3>
//                   <div className="overflow-x-auto mb-4">
//                     <table className="w-full border-collapse border border-gray-300">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="border border-gray-300 px-4 py-2 text-left">Label</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {(selectedStudent.extraFees || []).map((ef) => (
//                           <tr key={ef.id}>
//                             <td className="border border-gray-300 px-4 py-2">{ef.label}</td>
//                             <td className="border border-gray-300 px-4 py-2">{formatCurrency(ef.amount)}</td>
//                             <td className="border border-gray-300 px-4 py-2">{ef.status}</td>
//                             <td className="border border-gray-300 px-4 py-2">{ef.datePaid || '-'}</td>
//                           </tr>
//                         ))}
//                         {(selectedStudent.extraFees || []).length === 0 && (
//                           <tr><td colSpan={4} className="p-4 text-center text-gray-500">No extra fees.</td></tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>

//                   <h3 className="text-xl font-semibold mb-4">Fee History</h3>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse border border-gray-300">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="border border-gray-300 px-4 py-2 text-left">Month</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Date Paid</th>
//                           <th className="border border-gray-300 px-4 py-2 text-left">Note</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {(selectedStudent.feeHistory || []).map((fee, index) => (
//                           <tr key={index}>
//                             <td className="border border-gray-300 px-4 py-2">{fee.month}</td>
//                             <td className="border border-gray-300 px-4 py-2">{formatCurrency(fee.amount)}</td>
//                             <td className="border border-gray-300 px-4 py-2">{fee.status}</td>
//                             <td className="border border-gray-300 px-4 py-2">{fee.date || '-'}</td>
//                             <td className="border border-gray-300 px-4 py-2">{fee.note || '-'}</td>
//                           </tr>
//                         ))}
//                         {(selectedStudent.feeHistory || []).length === 0 && (
//                           <tr><td colSpan={5} className="p-4 text-center text-gray-500">No fee history yet.</td></tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//               </div>

//               <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                 <div className="flex items-center gap-3">
//                   <button onClick={handleOpenPrintable} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print</button>
//                   <button onClick={handleDownloadHtml} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download (HTML)</button>
//                 </div>

//                 <div className="w-full md:w-auto">
//                   <form onSubmit={handlePayment} className="flex flex-col md:flex-row items-center gap-3">
//                     <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} className="p-3 border rounded-lg">
//                       <option value="full">Pay Full Pending</option>
//                       <option value="monthly">Pay Monthly Fee</option>
//                       <option value="half">Pay Half Pending</option>
//                       <option value="custom">Custom Amount</option>
//                     </select>
//                     {paymentType === 'custom' && (
//                       <input type="number" placeholder="Enter amount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="p-3 border rounded-lg" />
//                     )}
//                     <button type="submit" className="bg-indigo-600 text-white px-4 py-3 rounded-lg">Process Payment</button>
//                   </form>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}

//       {/* ADMIN LOGIN */}
//       {currentPage === 'admin-login' && (
//         <div className="container mx-auto px-4 py-12 max-w-md">
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h2 className="text-2xl font-semibold mb-6">Administration Login</h2>
//             <form onSubmit={handleAdminLogin} className="space-y-4">
//               <input value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} placeholder="Username" className="w-full p-3 border rounded-lg" />
//               <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="Password" className="w-full p-3 border rounded-lg" />
//               <div className="flex items-center justify-between">
//                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</button>
//                 <button type="button" onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="text-sm text-gray-600">Back</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ADMIN DASHBOARD */}
//       {isAdminLoggedIn && currentPage === 'admin-dashboard' && (
//         <div className="container mx-auto px-4 py-12">
//           <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//           {/* Teacher Management Section */}
//           <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//             <h3 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">Teacher Management</h3>

//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="bg-blue-50 p-6 rounded-lg">
//                 <h4 className="text-xl font-semibold mb-4 flex items-center">
//                   <UserPlus className="h-6 w-6 mr-2" />
//                   Add New Teacher
//                 </h4>
//                 <div className="space-y-4">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input value={newTeacher.name} onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })} placeholder="Full Name" className="w-full p-3 border rounded-lg" />
//                     <input value={newTeacher.fatherName} onChange={(e) => setNewTeacher({ ...newTeacher, fatherName: e.target.value })} placeholder="Father's Name" className="w-full p-3 border rounded-lg" />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input value={newTeacher.cnic} onChange={(e) => setNewTeacher({ ...newTeacher, cnic: e.target.value })} placeholder="CNIC" className="w-full p-3 border rounded-lg" />
//                     <input value={newTeacher.phone} onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })} placeholder="Phone" className="w-full p-3 border rounded-lg" />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input value={newTeacher.salary} onChange={(e) => setNewTeacher({ ...newTeacher, salary: e.target.value })} placeholder="Salary" className="w-full p-3 border rounded-lg" />
//                     <input value={newTeacher.section} onChange={(e) => setNewTeacher({ ...newTeacher, section: e.target.value })} placeholder="Subject/Department" className="w-full p-3 border rounded-lg" />
//                   </div>
//                   <div>
//                     <input value={newTeacher.qualification} onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })} placeholder="Qualifications" className="w-full p-3 border rounded-lg" />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input value={newTeacher.experience} onChange={(e) => setNewTeacher({ ...newTeacher, experience: e.target.value })} placeholder="Experience (years)" className="w-full p-3 border rounded-lg" />
//                     <input type="date" value={newTeacher.joinDate} onChange={(e) => setNewTeacher({ ...newTeacher, joinDate: e.target.value })} placeholder="Join Date" className="w-full p-3 border rounded-lg" />
//                   </div>
//                   <button onClick={addTeacher} className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full">
//                     <UserPlus className="h-5 w-5 mr-2" />
//                     Add Teacher
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-xl font-semibold mb-4 flex items-center">
//                   <Users className="h-6 w-6 mr-2" />
//                   Teaching Staff ({teachersData.length})
//                 </h4>
//                 <div className="overflow-x-auto max-h-96 bg-white rounded-lg shadow">
//                   <table className="w-full border-collapse">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
//                         <th className="p-3 text-left text-sm font-semibold text-gray-700">Subject</th>
//                         <th className="p-3 text-left text-sm font-semibold text-gray-700">Salary</th>
//                         <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {teachersData.map(teacher => (
//                         <tr key={teacher.id} className="hover:bg-gray-50">
//                           <td className="p-3">
//                             <div>
//                               <div className="font-medium">{teacher.name}</div>
//                               <div className="text-sm text-gray-500">{teacher.qualification}</div>
//                             </div>
//                           </td>
//                           <td className="p-3">{teacher.section}</td>
//                           <td className="p-3">{formatCurrency(teacher.salary)}</td>
//                           <td className="p-3">
//                             <div className="flex space-x-2">
//                               <button onClick={() => viewTeacherDetails(teacher)} className="p-1 text-blue-600 hover:text-blue-800">
//                                 <Eye className="h-4 w-4" />
//                               </button>
//                               <button onClick={() => deleteTeacher(teacher.id)} className="p-1 text-red-600 hover:text-red-800">
//                                 <Trash2 className="h-4 w-4" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                       {teachersData.length === 0 && (
//                         <tr><td colSpan={4} className="p-4 text-center text-gray-500">No teachers added yet.</td></tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             {/* Teacher Statistics */}
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
//               <h4 className="text-xl font-semibold mb-4">Teacher Statistics</h4>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold">{teachersData.length}</div>
//                   <div className="text-sm">Total Teachers</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold">
//                     {teachersData.reduce((acc, teacher) => acc + teacher.salary, 0).toLocaleString()}
//                   </div>
//                   <div className="text-sm">Total Salary Expense</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold">
//                     {teachersData.length ? Math.round(teachersData.reduce((acc, teacher) => acc + teacher.salary, 0) / teachersData.length) : 0}
//                   </div>
//                   <div className="text-sm">Average Salary</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold">
//                     {new Set(teachersData.map(t => t.section)).size}
//                   </div>
//                   <div className="text-sm">Departments</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">Add New Class</h3>
//               <div className="flex gap-2">
//                 <input value={newClassName} onChange={(e) => setNewClassName(e.target.value)} placeholder="class-4 or class-5 (key)" className="flex-1 p-3 border rounded-lg" />
//                 <button onClick={addClass} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
//               </div>

//               <div className="mt-6">
//                 <h4 className="font-semibold mb-2">Apply Global Extra Fee</h4>
//                 <div className="flex gap-2 items-center mb-2">
//                   <input value={globalExtraLabel} onChange={(e) => setGlobalExtraLabel(e.target.value)} placeholder="Label (e.g. Exam Fee)" className="p-2 border rounded flex-1" />
//                   <input value={globalExtraAmount} onChange={(e) => setGlobalExtraAmount(e.target.value)} placeholder="Amount" type="number" className="p-2 border rounded w-28" />
//                   <button onClick={applyGlobalExtraToSelectedClasses} className="bg-purple-600 text-white px-3 py-2 rounded">Apply to Selected</button>
//                 </div>

//                 <div className="mb-2">
//                   <div className="flex gap-2 mb-2">
//                     <button onClick={selectAllClasses} className="text-sm bg-gray-200 px-2 py-1 rounded">Select All</button>
//                     <button onClick={deselectAllClasses} className="text-sm bg-gray-200 px-2 py-1 rounded">Deselect All</button>
//                   </div>

//                   <div className="max-h-40 overflow-y-auto border p-2 rounded">
//                     {Object.keys(studentsData).map(k => (
//                       <div key={k} className="flex items-center mb-1">
//                         <input
//                           type="checkbox"
//                           checked={selectedClasses.includes(k)}
//                           onChange={() => toggleClassSelection(k)}
//                           className="mr-2"
//                         />
//                         <span>{k.replace('-', ' ').toUpperCase()}</span>
//                       </div>
//                     ))}
//                     {Object.keys(studentsData).length === 0 && (
//                       <div className="text-sm text-gray-500">No classes available</div>
//                     )}
//                   </div>
//                 </div>

//                 <h4 className="font-semibold mt-4 mb-2">Existing Global Fees</h4>
//                 <div className="space-y-2 max-h-40 overflow-y-auto">
//                   {globalFees.map(fee => (
//                     <div key={fee.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
//                       <div>
//                         <div className="font-medium">{fee.label}</div>
//                         <div className="text-sm text-gray-600">{formatCurrency(fee.amount)} • Applied to: {fee.appliedTo.length} classes</div>
//                       </div>
//                       <button onClick={() => removeGlobalExtraFee(fee.id)} className="px-2 py-1 bg-red-600 text-white rounded text-sm">Remove</button>
//                     </div>
//                   ))}
//                   {globalFees.length === 0 && (
//                     <div className="text-sm text-gray-500 p-2">No global fees added yet.</div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <h4 className="font-semibold mb-2">Existing Classes</h4>
//                 <ul className="space-y-2">
//                   {Object.keys(studentsData).map(k => (
//                     <li key={k} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
//                       <div className="flex items-center gap-2">
//                         <button onClick={() => handlePrintClass(k)} className="text-left text-blue-600 hover:underline font-medium">{k.replace('-', ' ').toUpperCase()}</button>
//                         <span className="text-sm text-gray-600">({studentsData[k].length})</span>
//                       </div>
//                       <div className="flex gap-2">
//                         <button onClick={() => {
//                           // quick add demo student modal-less
//                           setNewStudent({ name: `Student ${studentsData[k].length + 1}`, rollNo: `${studentsData[k].length + 1}`, fatherName: 'Father Name', monthlyFee: '3000', classKey: k });
//                           addStudent();
//                         }} className="px-2 py-1 bg-green-600 text-white rounded text-sm flex items-center gap-1"><Plus className="h-4 w-4" />Add</button>
//                         <button onClick={() => {
//                           // print class quick button as well
//                           handlePrintClass(k);
//                         }} className="px-2 py-1 bg-gray-700 text-white rounded text-sm flex items-center gap-1"><Printer className="h-4 w-4" />Print</button>
//                       </div>
//                     </li>
//                   ))}
//                   {Object.keys(studentsData).length === 0 && <li className="text-sm text-gray-500 p-2">No classes yet. Add a class to begin.</li>}
//                 </ul>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">Add Student to Class</h3>
//               <div className="space-y-3">
//                 <input value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} placeholder="Student Full Name" className="w-full p-3 border rounded-lg" />
//                 <input value={newStudent.rollNo} onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })} placeholder="Roll No" className="w-full p-3 border rounded-lg" />
//                 <input value={newStudent.fatherName} onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
//                 <input value={newStudent.monthlyFee} onChange={(e) => setNewStudent({ ...newStudent, monthlyFee: e.target.value })} placeholder="Monthly Fee" className="w-full p-3 border rounded-lg" />
//                 <select value={newStudent.classKey} onChange={(e) => setNewStudent({ ...newStudent, classKey: e.target.value })} className="w-full p-3 border rounded-lg">
//                   <option value="">Select Class</option>
//                   {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
//                 </select>
//                 <div className="flex gap-2">
//                   <button onClick={addStudent} className="bg-green-600 text-white px-4 py-2 rounded-lg">Add Student</button>
//                   <button onClick={() => { setNewStudent({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' }); }} className="px-4 py-2 border rounded-lg">Clear</button>
//                 </div>
//               </div>

//               {/* DMC Management Section */}
//               <div className="mt-6">
//                 <h4 className="text-xl font-semibold mb-4">DMC Management</h4>
//                 <div className="space-y-3">
//                   <select value={dmcStudentInfo.class} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, class: e.target.value })} className="w-full p-3 border rounded-lg">
//                     <option value="">Select Class for DMC</option>
//                     {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
//                   </select>
//                   <input value={dmcStudentInfo.rollNo} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />
//                   <button onClick={() => { setCurrentPage('admin-dmc'); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Manage DMC</button>
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">All Students Overview</h3>

//               {/* editing panel */}
//               {editingStudent && (
//                 <div className="bg-yellow-50 p-4 mb-4 rounded">
//                   <h4 className="font-semibold mb-2">Edit Student</h4>
//                   <div className="grid md:grid-cols-2 gap-2">
//                     <input value={editingStudent.name} onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })} className="p-2 border rounded" />
//                     <input value={editingStudent.fatherName} onChange={(e) => setEditingStudent({ ...editingStudent, fatherName: e.target.value })} className="p-2 border rounded" />
//                     <input value={editingStudent.rollNo} onChange={(e) => setEditingStudent({ ...editingStudent, rollNo: e.target.value })} className="p-2 border rounded" />
//                     <input type="number" value={editingStudent.monthlyFee || 0} onChange={(e) => setEditingStudent({ ...editingStudent, monthlyFee: e.target.value })} className="p-2 border rounded" />
//                     <input type="number" value={editingStudent.pendingFee || 0} onChange={(e) => setEditingStudent({ ...editingStudent, pendingFee: e.target.value })} className="p-2 border rounded" />
//                     <input type="number" value={editingStudent.totalPaid || 0} onChange={(e) => setEditingStudent({ ...editingStudent, totalPaid: e.target.value })} className="p-2 border rounded" />
//                   </div>

//                   <div className="mt-3">
//                     <h5 className="font-medium mb-2">Extra Fees for this Student</h5>
//                     <div className="space-y-2">
//                       {(editingStudent.extraFees || []).map(ef => (
//                         <div key={ef.id} className="flex items-center justify-between bg-white p-2 rounded border">
//                           <div>
//                             <div className="font-semibold">{ef.label}</div>
//                             <div className="text-sm text-gray-600">{formatCurrency(ef.amount)} • {ef.status}</div>
//                           </div>
//                           <div className="flex gap-2">
//                             {ef.status === 'pending' && <button onClick={() => removeExtraFromStudent(editingStudent.classKey, editingStudent.id, ef.id)} className="px-2 py-1 border rounded text-sm">Remove</button>}
//                           </div>
//                         </div>
//                       ))}
//                       {(editingStudent.extraFees || []).length === 0 && <div className="text-sm text-gray-500">No extra fees</div>}
//                     </div>

//                     <div className="mt-3 flex gap-2 items-center">
//                       <input value={editExtraLabel} onChange={(e) => setEditExtraLabel(e.target.value)} placeholder="Extra label" className="p-2 border rounded flex-1" />
//                       <input value={editExtraAmount} onChange={(e) => setEditExtraAmount(e.target.value)} placeholder="Amount" type="number" className="p-2 border rounded w-28" />
//                       <button onClick={addExtraToEditingStudent} className="px-3 py-2 bg-indigo-600 text-white rounded">Add Extra</button>
//                     </div>
//                   </div>

//                   <div className="mt-3 flex gap-2">
//                     <button onClick={saveEditedStudent} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
//                     <button onClick={() => setEditingStudent(null)} className="px-3 py-1 border rounded">Cancel</button>
//                   </div>
//                 </div>
//               )}

//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse border border-gray-200">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="p-2 border">ID</th>
//                       <th className="p-2 border">Name</th>
//                       <th className="p-2 border">Father</th>
//                       <th className="p-2 border">Class</th>
//                       <th className="p-2 border">Roll</th>
//                       <th className="p-2 border">Monthly</th>
//                       <th className="p-2 border">Pending</th>
//                       <th className="p-2 border">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {getAllStudents().map(s => (
//                       <tr key={s.id} className="hover:bg-gray-50">
//                         <td className="p-2 border">{s.id}</td>
//                         <td className="p-2 border">{s.name}</td>
//                         <td className="p-2 border">{s.fatherName}</td>
//                         <td className="p-2 border">{(s.classKey || s.className).replace('-', ' ').toUpperCase()}</td>
//                         <td className="p-2 border">{s.rollNo}</td>
//                         <td className="p-2 border">{formatCurrency(s.monthlyFee)}</td>
//                         <td className="p-2 border">{formatCurrency(calculateTotalPendingForStudent(s))}</td>
//                         <td className="p-2 border">
//                           <div className="flex gap-2">
//                             <button onClick={() => { setSelectedStudent({ ...s, className: s.classKey }); setCurrentPage('student-fee-detail'); }} className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
//                             <button onClick={() => setEditingStudent({ ...s, classKey: s.classKey })} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
//                             <button onClick={() => deleteStudent(s.classKey, s.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                     {getAllStudents().length === 0 && (
//                       <tr><td colSpan={8} className="p-4 text-center text-gray-500">No students yet — add students from the panel above.</td></tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* ADMIN DMC MANAGEMENT */}
//       {isAdminLoggedIn && currentPage === 'admin-dmc' && (
//         <div className="container mx-auto px-4 py-12">
//           <h2 className="text-2xl font-semibold mb-4">DMC Management</h2>

//           <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Add/Edit DMC</h3>

//                 <div className="space-y-3 mb-4">
//                   <select value={dmcStudentInfo.class} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, class: e.target.value })} className="w-full p-3 border rounded-lg">
//                     <option value="">Select Class</option>
//                     {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
//                   </select>

//                   <input value={dmcStudentInfo.rollNo} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />

//                   <button onClick={() => {
//                     // Find student to pre-fill name and father name
//                     if (dmcStudentInfo.class && dmcStudentInfo.rollNo) {
//                       const student = (studentsData[dmcStudentInfo.class] || []).find(s => s.rollNo === dmcStudentInfo.rollNo);
//                       if (student) {
//                         setDmcStudentInfo(prev => ({
//                           ...prev,
//                           name: student.name,
//                           fatherName: student.fatherName
//                         }));
//                       }
//                     }
//                   }} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Load Student Info</button>
//                 </div>

//                 {dmcStudentInfo.name && (
//                   <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                     <p><strong>Student:</strong> {dmcStudentInfo.name}</p>
//                     <p><strong>Father:</strong> {dmcStudentInfo.fatherName}</p>
//                   </div>
//                 )}

//                 <div className="space-y-3">
//                   <input value={dmcStudentInfo.totalObtained} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, totalObtained: parseInt(e.target.value) || 0 })} placeholder="Total Obtained Marks" className="w-full p-3 border rounded-lg" />
//                   <input value={dmcStudentInfo.totalMarks} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, totalMarks: parseInt(e.target.value) || 0 })} placeholder="Total Marks" className="w-full p-3 border rounded-lg" />
//                   <input value={dmcStudentInfo.percentage} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, percentage: parseFloat(e.target.value) || 0 })} placeholder="Percentage" className="w-full p-3 border rounded-lg" />
//                   <input value={dmcStudentInfo.grade} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, grade: e.target.value })} placeholder="Grade"></input>
//                  <input
//   value={dmcStudentInfo.position}
//   onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, position: e.target.value })}
//   placeholder="Position in class"
//   className="w-full p-3 border rounded-lg"
// />


//                   <button onClick={addDmc} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Save DMC</button>
//                 </div>

//                 <h4 className="font-semibold mt-6 mb-3">Subjects</h4>
//                 <div className="space-y-3 max-h-60 overflow-y-auto">
//                   {dmcSubjects.map((subject, index) => (
//                     <div key={index} className="bg-gray-50 p-3 rounded-lg">
//                       <div className="flex items-center justify-between mb-2">
//                         <input
//                           value={subject.name}
//                           onChange={(e) => updateDmcSubject(index, 'name', e.target.value)}
//                           placeholder="Subject Name"
//                           className="flex-1 p-2 border rounded mr-2"
//                         />
//                         <button onClick={() => removeSubject(index)} className="p-2 bg-red-500 text-white rounded">
//                           <X className="h-4 w-4" />
//                         </button>
//                       </div>
//                       <div className="grid grid-cols-3 gap-2">
//                         <input
//                           value={subject.obtained}
//                           onChange={(e) => updateDmcSubject(index, 'obtained', e.target.value)}
//                           placeholder="Obtained"
//                           type="number"
//                           className="p-2 border rounded"
//                         />
//                         <input
//                           value={subject.total}
//                           onChange={(e) => updateDmcSubject(index, 'total', e.target.value)}
//                           placeholder="Total"
//                           type="number"
//                           className="p-2 border rounded"
//                         />
//                         <input
//                           value={subject.grade}
//                           onChange={(e) => updateDmcSubject(index, 'grade', e.target.value)}
//                           placeholder="Grade"
//                           className="p-2 border rounded"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                   <button onClick={addNewSubject} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center">
//                     <Plus className="h-4 w-4 mr-1" /> Add Subject
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Existing DMCs</h3>

//                 <div className="overflow-x-auto max-h-96">
//                   <table className="w-full border-collapse border border-gray-200">
//                     <thead>
//                       <tr className="bg-gray-50">
//                         <th className="p-2 border">Class</th>
//                         <th className="p-2 border">Roll No</th>
//                         <th className="p-2 border">Name</th>
//                         <th className="p-2 border">Percentage</th>
//                         <th className="p-2 border">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {Object.entries(resultsData).map(([className, classResults]) => 
//                         Object.entries(classResults).map(([rollNo, result]) => (
//                           <tr key={`${className}-${rollNo}`} className="hover:bg-gray-50">
//                             <td className="p-2 border">{className.replace('-', ' ').toUpperCase()}</td>
//                             <td className="p-2 border">{rollNo}</td>
//                             <td className="p-2 border">{result.name}</td>
//                             <td className="p-2 border">{result.percentage}%</td>
//                             <td className="p-2 border">
//                               <button onClick={() => {
//                                 setDmcStudentInfo({
//                                   class: className,
//                                   rollNo: rollNo,
//                                   name: result.name,
//                                   fatherName: result.fatherName,
//                                   totalObtained: result.totalObtained || 0,
//                                   totalMarks: result.totalMarks || 0,
//                                   percentage: result.percentage || 0,
//                                   grade: result.grade || '',
//                                   position: result.position || ''
//                                 });
//                                 setDmcSubjects(result.subjects ? Object.entries(result.subjects).map(([name, data]) => ({
//                                   name,
//                                   obtained: data.obtained.toString(),
//                                   total: data.total.toString(),
//                                   grade: data.grade
//                                 })) : [
//                                   { name: 'English', obtained: '', total: '', grade: '' },
//                                   { name: 'Math', obtained: '', total: '', grade: '' },
//                                   { name: 'Science', obtained: '', total: '', grade: '' },
//                                   { name: 'Urdu', obtained: '', total: '', grade: '' },
//                                   { name: 'Islamiat', obtained: '', total: '', grade: '' },
//                                   { name: 'Social Studies', obtained: '', total: '', grade: '' }
//                                 ]);
//                               }} className="px-2 py-1 bg-blue-600 text-white rounded text-sm mr-1">Edit</button>
//                               <button onClick={() => deleteDmc(className, rollNo)} className="px-2 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                       {Object.keys(resultsData).length === 0 && (
//                         <tr><td colSpan={5} className="p-4 text-center text-gray-500">No DMCs added yet.</td></tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
//             </div>
//           </div>
//         </div>
//       )}


//  {isAdminLoggedIn && currentPage === 'admin-student-profiles' && (
//   <div className="container mx-auto px-4 py-12">
//     <h2 className="text-2xl font-semibold mb-4">Student Profiles</h2>

//     <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//       <div className="grid md:grid-cols-2 gap-6">

//         {/* Add / Edit Form */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">
//             {editingProfileId ? "Edit Student Profile" : "Add New Student Profile"}
//           </h3>

//           <div className="space-y-3">
//             <input value={newStudentProfile.name} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, name: e.target.value })} placeholder="Student Name" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.fatherName} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.class} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, class: e.target.value })} placeholder="Class" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.rollNo} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.phone} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, phone: e.target.value })} placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
//             <input type="date" value={newStudentProfile.birthDate} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, birthDate: e.target.value })} placeholder="Birth Date" className="w-full p-3 border rounded-lg" />

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Student Photo</label>
//               <input 
//                 type="file" 
//                 accept="image/*" 
//                 onChange={(e) => setNewStudentProfile({ ...newStudentProfile, photo: e.target.files[0] })} 
//                 className="w-full p-3 border rounded-lg" 
//               />
//             </div>

//             {editingProfileId ? (
//               <button onClick={updateStudentProfile} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Update Profile</button>
//             ) : (
//               <button onClick={addStudentProfile} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Add Profile</button>
//             )}
//           </div>
//         </div>

//         {/* Existing Profiles */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Existing Student Profiles ({studentProfiles.length})</h3>

//           <div className="overflow-x-auto max-h-96">
//             <table className="w-full border-collapse">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Photo</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Class</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Roll No</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {studentProfiles.map(profile => (
//                   <tr key={profile.id} className="hover:bg-gray-50">
//                     <td className="p-3">
//                       {profile.photo ? (
//                         <img src={profile.photo} alt={profile.name} className="h-12 w-12 rounded-full object-cover" />
//                       ) : (
//                         <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
//                           <User className="h-6 w-6 text-gray-400" />
//                         </div>
//                       )}
//                     </td>
//                     <td className="p-3">
//                       <div>
//                         <div className="font-medium">{profile.name}</div>
//                         <div className="text-sm text-gray-500">{profile.fatherName}</div>
//                       </div>
//                     </td>
//                     <td className="p-3">{profile.class}</td>
//                     <td className="p-3">{profile.rollNo}</td>
//                     <td className="p-3">
//                       <div className="flex space-x-2">
//                         <button onClick={() => viewStudentProfile(profile)} className="p-1 text-blue-600 hover:text-blue-800">
//                           <Eye className="h-4 w-4" />
//                         </button>
//                         <button onClick={() => startEditingProfile(profile)} className="p-1 text-yellow-600 hover:text-yellow-800">
//                           <Pencil className="h-4 w-4" />
//                         </button>
//                         <button onClick={() => deleteStudentProfile(profile.id)} className="p-1 text-red-600 hover:text-red-800">
//                           <Trash2 className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {studentProfiles.length === 0 && (
//                   <tr><td colSpan={5} className="p-4 text-center text-gray-500">No student profiles added yet.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6">
//         <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
//       </div>
//     </div>
//   </div>
// )}

//       {/* ADMIN SEARCH */}
//       {/* {isAdminLoggedIn && currentPage === 'admin-search' && (
//         <div className="container mx-auto px-4 py-12">
//           <h2 className="text-2xl font-semibold mb-4">Search Students</h2>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <div className="flex gap-2 mb-4">
//               <input value={searchTerm} onChange={(e) => setSearchTerm('')} placeholder="Search by name, father, roll or class" className="flex-1 p-3 border rounded-lg" />
//               <button onClick={() => setSearchTerm('')} className="px-4 py-2 border rounded-lg">Clear</button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-200">
//                 <thead>
//                   <tr className="bg-gray-50">
//                     <th className="p-2 border">Name</th>
//                     <th className="p-2 border">Father</th>
//                     <th className="p-2 border">Class</th>
//                     <th className="p-2 border">Roll</th>
//                     <th className="p-2 border">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {getFilteredStudents().map(s => (
//                     <tr key={s.id} className="hover:bg-gray-50">
//                       <td className="p-2 border">{s.name}</td>
//                       <td className="p-2 border">{s.fatherName}</td>
//                       <td className="p-2 border">{(s.classKey || s.className).replace('-', ' ').toUpperCase()}</td>
//                       <td className="p-2 border">{s.rollNo}</td>
//                       <td className="p-2 border">
//                         <div className="flex gap-2">
//                           <button onClick={() => { setSelectedStudent(s); setCurrentPage('student-fee-detail'); }} className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
//                           <button onClick={() => { const st = { ...s, classKey: s.classKey }; const html = buildPrintableHtml([st]); openPrintWindow(html); }} className="px-3 py-1 bg-green-600 text-white rounded">Print</button>
//                         </div>
//                       </td>
//             I        </tr>
//                   ))}
//                   {getFilteredStudents().length === 0 && <tr><td colSpan={5} className="p-4 text-center text-gray-500">No students match the search.</td></tr>}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )} */}

//       {isAdminLoggedIn && currentPage === 'admin-search' && (
//   <div className="container mx-auto px-4 py-12">
//     <h2 className="text-2xl font-semibold mb-4">Search Students</h2>
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <div className="flex gap-2 mb-4">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}  // ✅ fixed input
//           placeholder="Search by name, father, roll or class"
//           className="flex-1 p-3 border rounded-lg"
//         />
//         <button
//           onClick={() => setSearchTerm('')}
//           className="px-4 py-2 border rounded-lg"
//         >
//           Clear
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Father</th>
//               <th className="p-2 border">Class</th>
//               <th className="p-2 border">Roll</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(() => {
//               const students = getFilteredStudents(); // ✅ only once
//               return (
//                 <>
//                   {students.map((s) => (
//                     <tr key={s.id} className="hover:bg-gray-50">
//                       <td className="p-2 border">{s.name}</td>
//                       <td className="p-2 border">{s.fatherName}</td>
//                       <td className="p-2 border">
//                         {(s.classKey || s.className || "")
//                           .replace("-", " ")
//                           .toUpperCase()}
//                       </td>
//                       <td className="p-2 border">{s.rollNo}</td>
//                       <td className="p-2 border">
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => {
//                               setSelectedStudent(s);
//                               setCurrentPage("student-fee-detail");
//                             }}
//                             className="px-3 py-1 bg-blue-600 text-white rounded"
//                           >
//                             View
//                           </button>
//                           <button
//                             onClick={() => {
//                               const st = { ...s, classKey: s.classKey };
//                               const html = buildPrintableHtml([st]);
//                               openPrintWindow(html);
//                             }}
//                             className="px-3 py-1 bg-green-600 text-white rounded"
//                           >
//                             Print
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                   {students.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={5}
//                         className="p-4 text-center text-gray-500"
//                       >
//                         No students match the search.
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               );
//             })()}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// )}


//       {/* TEACHER DETAILS */}
//       {isAdminLoggedIn && currentPage === 'teacher-details' && selectedTeacher && (
//         <div className="container mx-auto px-4 py-8">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h1 className="text-3xl font-bold">{selectedTeacher.name}</h1>
//                   <p className="text-blue-100">{selectedTeacher.section} Department</p>
//                 </div>
//                 <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-white text-blue-600 px-4 py-2 rounded-lg">
//                   Back to Dashboard
//                 </button>
//               </div>
//             </div>

//             <div className="p-6">
//               <div className="grid md:grid-cols-2 gap-8 mb-8">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center">
//                       <User className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Father's Name:</span>
//                       <span className="ml-2">{selectedTeacher.fatherName}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Shield className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">CNIC:</span>
//                       <span className="ml-2">{selectedTeacher.cnic}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Phone className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Phone:</span>
//                       <span className="ml-2">{selectedTeacher.phone}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Book className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Qualifications:</span>
//                       <span className="ml-2">{selectedTeacher.qualification || 'Not specified'}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-4 text-gray-700">Employment Details</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center">
//                       <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Salary:</span>
//                       <span className="ml-2">{formatCurrency(selectedTeacher.salary)}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Calendar className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Join Date:</span>
//                       <span className="ml-2">{selectedTeacher.joinDate || 'Not specified'}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Star className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Experience:</span>
//                       <span className="ml-2">{selectedTeacher.experience || 'Not specified'} years</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Award className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Status:</span>
//                       <span className="ml-2 text-green-600 font-medium">Active</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="border-t pt-6">
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">Classes Assigned</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {Object.keys(studentsData).slice(0, 4).map(classKey => (
//                     <div key={classKey} className="bg-blue-50 p-4 rounded-lg text-center">
//                                         <div className="flex items-center">
//                       <Phone className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Phone:</span>
//                       <span className="ml-2">{selectedTeacher.phone}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Book className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Qualifications:</span>
//                       <span className="ml-2">{selectedTeacher.qualification || 'Not specified'}</span>
//                     </div>
//                   </div>
//                   ))}
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-4 text-gray-700">Employment Details</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center">
//                       <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Salary:</span>
//                       <span className="ml-2">{formatCurrency(selectedTeacher.salary)}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Calendar className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Join Date:</span>
//                       <span className="ml-2">{selectedTeacher.joinDate || 'Not specified'}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Star className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Experience:</span>
//                       <span className="ml-2">{selectedTeacher.experience || 'Not specified'} years</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Award className="h-5 w-5 text-gray-500 mr-3" />
//                       <span className="font-medium">Status:</span>
//                       <span className="ml-2 text-green-600 font-medium">Active</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="border-t pt-6">
//                 <h3 className="text-xl font-semibold mb-4 text-gray-700">Classes Assigned</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {Object.keys(studentsData).slice(0, 4).map(classKey => (
//                     <div key={classKey} className="bg-blue-50 p-4 rounded-lg text-center">
//                       <div className="text-lg font-semibold">{classKey.replace('-', ' ').toUpperCase()}</div>
//                       <div className="text-sm text-gray-600">{studentsData[classKey].length} students</div>
//                     </div>
//                   ))}
//                   {Object.keys(studentsData).length > 4 && (
//                     <div className="bg-gray-100 p-4 rounded-lg text-center">
//                       <div className="text-lg font-semib">+{Object.keys(studentsData).length - 4} more</div>
//                       <div className="text-sm text-gray-600">Classes</div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-6 border-t">
//               <div className="flex flex-wrap gap-4">
//                 <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
//                   <Printer className="h-4 w-4 mr-2" />
//                   Print Profile
//                 </button>
//                 <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
//                   <Mail className="h-4 w-4 mr-2" />
//                   Send Message
//                 </button>
//                 <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
//                   Edit Information
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* LEAVING CERTIFICATE PAGE */}
//       {currentPage === 'leaving-certificate' && (
//         <div className="container mx-auto px-4 py-8">
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h1 className="text-3xl font-bold text-center mb-8">Leaving Certificate</h1>

//             <div className="max-w-4xl mx-auto">
//               <div ref={printRef} className="p-8 border-2 border-dashed border-gray-300">
//                 <div className="text-center mb-8">
//                   <h2 className="text-2xl font-bold">IQRA GRAMMAR PUBLIC SCHOOL</h2>
//                   <p className="text-gray-600">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</p>
//                   <p className="text-gray-600">Phone: 03365716844</p>
//                 </div>

//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-semibold underline">LEAVING CERTIFICATE</h3>
//                 </div>

//                 <div className="space-y-4 mb-6">
//                   <p>This is to certify that <span className="font-semibold">[Student Name]</span>, 
//                   son/daughter of <span className="font-semibold">[Father Name]</span>, 
//                   was a student of this school from <span className="font-semibold">[Admission Date]</span> 
//                   to <span className="font-semibold">[Leaving Date]</span>.</p>

//                   <p>He/She was studying in class <span className="font-semibold">[Class]</span> 
//                   and his/her roll number was <span className="font-semibold">[Roll Number]</span>.</p>

//                   <p>His/Her conduct during the stay in the school was <span className="font-semibold">[Conduct]</span>.</p>

//                   <p>He/She has paid all the dues of the school and has no outstanding amount against him/her.</p>

//                   <p>We wish him/her success in future endeavors.</p>
//                 </div>

//                 <div className="flex justify-between items-end mt-12">
//                   <div>
//                     <p>Date: <span className="font-semibold">{new Date().toLocaleDateString()}</span></p>
//                     <p>Place: Dera Ismail Khan</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="mb-2">_________________________</div>
//                     <div className="font-semibold">Principal</div>
//                     <div>Iqra Grammar Public School</div>
//                   </div>
//                 </div>

//                 <div className="text-center mt-8 text-sm text-gray-500">
//                   <p>Note: This certificate is computer generated and does not require signature.</p>
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-center space-x-4">
//                 <button onClick={handlePrintLeavingCertificate} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
//                   <Printer className="h-4 w-4 mr-2" />
//                   Print Certificate
//                 </button>
//                 <button onClick={handleDownloadLeavingCertificate} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
//                   <Download className="h-4 w-4 mr-2" />
//                   Download Certificate
//                 </button>
//                 <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
//                   Back to Dashboard
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <footer className="border-t mt-12 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Iqra Grammar Public School</footer>

//       {/* Toast animation style */}
//       <style>{`
//         @keyframes slideIn {
//           from { transform: translateX(100%); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         .animate-sladeIn {
//           animation: slideIn 0.35s ease-out;
//         }
//         /* hide print helpers in screen */
//         @media print {
//           .animate-slideIn, nav, footer, .fixed { display: none !important; }
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from 'react';
// import './index.css';
// import { 
//   User, GraduationCap, Phone, DollarSign, Home, BookOpen, Settings, 
//   Download, Printer, Plus, Search, Eye, CreditCard, UserPlus, Calculator, 
//   LogOut, School, FileText, Award, BarChart3, Users, Trash2, Edit3, X, 
//   Mail, Calendar, MapPin, Clock, Pencil,Shield, Star, Book, Menu, Camera
// } from 'lucide-react';
// import Slider from './component/Slider';

// // Single-file React component for IGPS school app
// // Built to be used inside a Create React App or Vite project with Tailwind CSS

// export default function SchoolApp() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [userType, setUserType] = useState(''); // 'student' or ''
//   const [studentInfo, setStudentInfo] = useState({ name: '', class: '', rollNo: '' });
//   const [loginForm, setLoginForm] = useState({ username: '', password: '' });
//   const [searchTerm, setSearchTerm] = useState(''); // admin search
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [paymentType, setPaymentType] = useState('full');
//   const [customAmount, setCustomAmount] = useState('');
//   const printRef = useRef(null);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);

//   // ---------- PERSISTENCE: load/save studentsData ----------
//   const STORAGE_KEY = 'igps_students_data_v1';
//   const TEACHERS_STORAGE_KEY = 'igps_teachers_data_v1';
//   const GLOBAL_FEES_STORAGE_KEY = 'igps_global_fees_data_v1';
//   const RESULTS_STORAGE_KEY = 'igps_results_data_v1';
//   const STUDENT_PROFILES_STORAGE_KEY = 'igps_student_profiles_data_v1';

//   const [studentsData, setStudentsData] = useState(() => {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved students data', e);
//     }
//     // START EMPTY (no pre-added classes) as you requested
//     return {};
//   });

//   const [teachersData, setTeachersData] = useState(() => {
//     try {
//       const saved = localStorage.getItem(TEACHERS_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved teachers data', e);
//     }
//     return [];
//   });

//   const [globalFees, setGlobalFees] = useState(() => {
//     try {
//       const saved = localStorage.getItem(GLOBAL_FEES_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved global fees data', e);
//     }
//     return [];
//   });

//   // For DMC (results) - simplified data structure
//   const [resultsData, setResultsData] = useState(() => {
//     try {
//       const saved = localStorage.getItem(RESULTS_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved results data', e);
//     }
//     return {};
//   });

//   // Student profiles with photos
//   const [studentProfiles, setStudentProfiles] = useState(() => {
//     try {
//       const saved = localStorage.getItem(STUDENT_PROFILES_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     } catch (e) {
//       console.error('Failed to parse saved student profiles data', e);
//     }
//     return [];
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsData));
//     } catch (e) {
//       console.error('Failed to save students data', e);
//     }
//   }, [studentsData]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(TEACHERS_STORAGE_KEY, JSON.stringify(teachersData));
//     } catch (e) {
//       console.error('Failed to save teachers data', e);
//     }
//   }, [teachersData]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(GLOBAL_FEES_STORAGE_KEY, JSON.stringify(globalFees));
//     } catch (e) {
//       console.error('Failed to save global fees data', e);
//     }
//   }, [globalFees]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(resultsData));
//     } catch (e) {
//       console.error('Failed to save results data', e);
//     }
//   }, [resultsData]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(STUDENT_PROFILES_STORAGE_KEY, JSON.stringify(studentProfiles));
//     } catch (e) {
//       console.error('Failed to save student profiles data', e);
//     }
//   }, [studentProfiles]);
//   // -------------------------------------------------------

//   // For admin: add class and add student form states
//   const [newClassName, setNewClassName] = useState('');
//   const [newStudent, setNewStudent] = useState({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' });

//   // For editing student
//   const [editingStudent, setEditingStudent] = useState(null); // { classKey, ...student }

//   // For extra-fee UI (global)
//   const [globalExtraLabel, setGlobalExtraLabel] = useState('');
//   const [globalExtraAmount, setGlobalExtraAmount] = useState('');
//   const [selectedClasses, setSelectedClasses] = useState([]);

//   // For adding per-student extra fee in edit panel
//   const [editExtraLabel, setEditExtraLabel] = useState('');
//   const [editExtraAmount, setEditExtraAmount] = useState('');

//   // For teacher management
//   const [newTeacher, setNewTeacher] = useState({ 
//     name: '', 
//     fatherName: '', 
//     cnic: '', 
//     phone: '', 
//     salary: '', 
//     section: '',
//     qualification: '',
//     experience: '',
//     joinDate: ''
//   });

//   // For DMC management - simplified
//   const [dmcSubjects, setDmcSubjects] = useState([
//     { name: 'English', obtained: '', total: '', grade: '' },
//     { name: 'Math', obtained: '', total: '', grade: '' },
//     { name: 'Science', obtained: '', total: '', grade: '' },
//     { name: 'Urdu', obtained: '', total: '', grade: '' },
//     { name: 'Islamiat', obtained: '', total: '', grade: '' },
//     { name: 'Social Studies', obtained: '', total: '', grade: '' }
//   ]);
//   const [dmcStudentInfo, setDmcStudentInfo] = useState({
//     class: '',
//     rollNo: '',
//     name: '',
//     fatherName: '',
//     totalObtained: 0,
//     totalMarks: 0,
//     percentage: 0,
//     grade: '',
//     position: ''
//   });

//   // For student profile management
//   const [newStudentProfile, setNewStudentProfile] = useState({
//     name: '',
//     fatherName: '',
//     class: '',
//     rollNo: '',
//     phone: '',
//     birthDate: '',
//     photo: null
//   });

//   // ---------- Toast system (no alerts) ----------
//   const [toasts, setToasts] = useState([]); // {id, message, type, confirm, onConfirm}

//   const addToast = (message, { type = 'success', duration = 1400 } = {}) => {
//     const id = Date.now().toString() + Math.random().toString(36).slice(2);
//     const toast = { id, message, type, confirm: false };
//     setToasts(prev => [...prev, toast]);
//     if (duration > 0) {
//       setTimeout(() => {
//         setToasts(prev => prev.filter(t => t.id !== id));
//       }, duration);
//     }
//     return id;
//   };

//   const addConfirmToast = (message, onConfirm, { duration = 5000 } = {}) => {
//     const id = Date.now().toString() + Math.random().toString(36).slice(2);
//     const toast = { id, message, type: 'confirm', confirm: true, onConfirm };
//     setToasts(prev => [...prev, toast]);
//     if (duration > 0) {
//       setTimeout(() => {
//         setToasts(prev => prev.filter(t => t.id !== id));
//       }, duration);
//     }
//     return id;
//   };

//   const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));
//   // ------------------------------------------------

//   // Helpers
//   const getAllStudents = () => {
//     const all = [];
//     Object.keys(studentsData).forEach(classKey => {
//       const arr = studentsData[classKey] || [];
//       arr.forEach(s => all.push({ ...s, classKey }));
//     });
//     return all;
//   };

//   const formatCurrency = (n) => `Rs. ${Number(n || 0).toLocaleString()}`;

//   // Calculate total pending for display: base pendingFee + sum of extraFees pending
//   const calculateTotalPendingForStudent = (s) => {
//     const basePending = Number(s.pendingFee || 0);
//     const extrasPending = (s.extraFees || []).reduce((acc, ef) => acc + (ef.status === 'pending' ? Number(ef.amount || 0) : 0), 0);
//     return basePending + extrasPending;
//   };

//   // Student side search
//   const handleStudentSearch = (e) => {
//     if (e) e.preventDefault();
//     const classStudents = studentsData[studentInfo.class] || [];
//     const student = classStudents.find(s =>
//       s.name.toLowerCase() === studentInfo.name.trim().toLowerCase() && s.rollNo === studentInfo.rollNo.trim()
//     );

//     if (student) {
//       setSelectedStudent({ ...student, className: studentInfo.class });
//       setCurrentPage('student-fee-detail');
//     } else {
//       addToast('Student not found! Please check Name, Class and Roll Number.', { type: 'error' });
//     }
//   };

//   // DMC search
//   const handleDmcSearch = (e) => {
//     if (e) e.preventDefault();
//     const classResults = resultsData[studentInfo.class] || {};
//     const result = classResults[studentInfo.rollNo];

//     if (result && result.name.toLowerCase() === studentInfo.name.trim().toLowerCase()) {
//       setSelectedStudent({ 
//         ...result, 
//         className: studentInfo.class,
//         hasDmc: true 
//       });
//       setCurrentPage('student-dmc');
//     } else {
//       addToast('Result not found! Please check Name, Class and Roll Number.', { type: 'error' });
//     }
//   };

//   // Admin login
//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     const { username, password } = loginForm;
//     // preserved the password text exactly as in your pasted code
//     if (username === 'IGPS' && password === 'IQRAGPS') {
//       setIsAdminLoggedIn(true);
//       setCurrentPage('admin-dashboard');
//       setLoginForm({ username: '', password: '' });
//       addToast('Admin logged in.');
//     } else {
//       addToast('Invalid admin credentials.', { type: 'error' });
//     }
//   };

//   // Admin: add class
//   const addClass = () => {
//     const key = newClassName.trim();
//     if (!key) {
//       addToast('Please enter a class key (e.g. class-4)', { type: 'error' });
//       return;
//     }
//     if (studentsData[key]) {
//       addToast('This class already exists.', { type: 'error' });
//       return;
//     }
//     setStudentsData(prev => ({ ...prev, [key]: [] }));
//     setNewClassName('');
//     addToast('Class added successfully.');
//   };

//   // Admin: add student
//   const addStudent = () => {
//     const { name, rollNo, fatherName, monthlyFee, classKey } = newStudent;
//     if (!name || !rollNo || !fatherName || !monthlyFee || !classKey) {
//       addToast('Please fill all fields to add student.', { type: 'error' });
//       return;
//     }

//     const updated = { ...studentsData };
//     if (!updated[classKey]) updated[classKey] = [];

//     const all = getAllStudents();
//     const newId = all.length > 0 ? Math.max(...all.map(s => s.id)) + 1 : 1;

//     updated[classKey].push({
//       id: newId,
//       name: name.trim(),
//       rollNo: rollNo.trim(),
//       fatherName: fatherName.trim(),
//       monthlyFee: parseInt(monthlyFee, 10),
//       pendingFee: parseInt(monthlyFee, 10),
//       totalPaid: 0,
//       feeHistory: [],
//       extraFees: [] // initialize extra fees array
//     });

//     setStudentsData(updated);
//     setNewStudent({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' });
//     addToast('Student added to class.');
//   };

//   // Admin: add student profile
//   // const addStudentProfile = () => {
//   //   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
//   //   if (!name || !fatherName || !className || !rollNo) {
//   //     addToast('Please fill all required fields to add student profile.', { type: 'error' });
//   //     return;
//   //   }

//   //   const newId = studentProfiles.length > 0 ? Math.max(...studentProfiles.map(p => p.id)) + 1 : 1;

//   //   // Convert photo to base64 if it exists
//   //   let photoBase64 = null;
//   //   if (photo) {
//   //     const reader = new FileReader();
//   //     reader.onload = (e) => {
//   //       const profileWithPhoto = {
//   //         id: newId,
//   //         name: name.trim(),
//   //         fatherName: fatherName.trim(),
//   //         class: className.trim(),
//   //         rollNo: rollNo.trim(),
//   //         phone: phone.trim(),
//   //         birthDate: birthDate,
//   //         photo: e.target.result
//   //       };

//   //       setStudentProfiles(prev => [...prev, profileWithPhoto]);
//   //       setNewStudentProfile({
//   //         name: '',
//   //         fatherName: '',
//   //         class: '',
//   //         rollNo: '',
//   //         phone: '',
//   //         birthDate: '',
//   //         photo: null
//   //       });
//   //       addToast('Student profile added successfully.');
//   //     };
//   //     reader.readAsDataURL(photo);
//   //   } else {
//   //     setStudentProfiles(prev => [
//   //       ...prev,
//   //       {
//   //         id: newId,
//   //         name: name.trim(),
//   //         fatherName: fatherName.trim(),
//   //         class: className.trim(),
//   //         rollNo: rollNo.trim(),
//   //         phone: phone.trim(),
//   //         birthDate: birthDate,
//   //         photo: null
//   //       }
//   //     ]);
//   //     setNewStudentProfile({
//   //       name: '',
//   //       fatherName: '',
//   //       class: '',
//   //       rollNo: '',
//   //       phone: '',
//   //       birthDate: '',
//   //       photo: null
//   //     });
//   //     addToast('Student profile added successfully.');
//   //   }
//   // };

//   // // Delete student profile
//   // const deleteStudentProfile = (id) => {
//   //   addConfirmToast('Delete this student profile?', () => {
//   //     setStudentProfiles(prev => prev.filter(profile => profile.id !== id));
//   //     addToast('Student profile deleted.');
//   //   }, { duration: 7000 });
//   // };

//   // Recommended states (if not already present)
// // const [studentProfiles, setStudentProfiles] = useState([]); // always an array
// // const [newStudentProfile, setNewStudentProfile] = useState({
// //   id: null,
// //   name: '',
// //   fatherName: '',
// //   class: '',
// //   rollNo: '',
// //   phone: '',
// //   birthDate: '',
// //   photo: null
// // });
// const [editingProfileId, setEditingProfileId] = useState(null);

// // ---- Add student profile ----
// const addStudentProfile = () => {
//   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;

//   if (!name || !fatherName || !className || !rollNo) {
//     addToast('Please fill all required fields to add student profile.', { type: 'error' });
//     return;
//   }

//   const safeProfiles = Array.isArray(studentProfiles) ? studentProfiles : [];
//   const newId = safeProfiles.length > 0 ? Math.max(...safeProfiles.map(p => p.id)) + 1 : 1;

//   const saveProfile = (photoBase64 = null) => {
//     const profile = {
//       id: newId,
//       name: name.trim(),
//       fatherName: fatherName.trim(),
//       class: className.trim(),
//       rollNo: rollNo.trim(),
//       phone: phone ? phone.trim() : '',
//       birthDate: birthDate || '',
//       photo: photoBase64
//     };
//     setStudentProfiles(prev => [...(Array.isArray(prev) ? prev : []), profile]);
//     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
//     addToast('Student profile added successfully.');
//   };

//   // If user provided a File -> convert to base64
//   if (photo instanceof File) {
//     const reader = new FileReader();
//     reader.onload = (e) => saveProfile(e.target.result);
//     reader.readAsDataURL(photo);
//   } else {
//     // no file (or photo is already base64 - but for add, it should be null)
//     saveProfile(photo ?? null);
//   }
// };

// // ---- Start editing (fills the form) ----
// const startEditingProfile = (profile) => {
//   setEditingProfileId(profile.id);
//   setNewStudentProfile({
//     id: profile.id,
//     name: profile.name ?? '',
//     fatherName: profile.fatherName ?? '',
//     class: profile.class ?? '',
//     rollNo: profile.rollNo ?? '',
//     phone: profile.phone ?? '',
//     birthDate: profile.birthDate ?? '',
//     photo: null // IMPORTANT: null means "no new file uploaded yet"
//   });
//   // optional: scroll to form
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };

// // ---- Update student profile ----
// const updateStudentProfile = () => {
//   if (!editingProfileId) return;

//   const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
//   if (!name || !fatherName || !className || !rollNo) {
//     addToast('Please fill all required fields to update student profile.', { type: 'error' });
//     return;
//   }

//   const applyUpdate = (photoBase64 = null) => {
//     setStudentProfiles(prev =>
//       (Array.isArray(prev) ? prev : []).map(p =>
//         p.id === editingProfileId
//           ? {
//               ...p,
//               name: name.trim(),
//               fatherName: fatherName.trim(),
//               class: className.trim(),
//               rollNo: rollNo.trim(),
//               phone: phone ? phone.trim() : '',
//               birthDate: birthDate || '',
//               photo: photoBase64 ?? p.photo ?? null // use new photo if provided, else keep existing
//             }
//           : p
//       )
//     );

//     setEditingProfileId(null);
//     setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
//     addToast('Student profile updated successfully.');
//   };

//   // Only convert to base64 if the uploaded item is a File
//   if (photo instanceof File) {
//     const reader = new FileReader();
//     reader.onload = (e) => applyUpdate(e.target.result);
//     reader.readAsDataURL(photo);
//   } else {
//     // no new file uploaded: keep previous photo stored in profiles
//     applyUpdate();
//   }
// };

// // ---- Cancel editing (reset form) ----
// const cancelEditing = () => {
//   setEditingProfileId(null);
//   setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
// };

// // ---- Delete student profile ----
// const deleteStudentProfile = (id) => {
//   addConfirmToast('Delete this student profile?', () => {
//     setStudentProfiles(prev => (Array.isArray(prev) ? prev.filter(profile => profile.id !== id) : []));
//     addToast('Student profile deleted.');
//   }, { duration: 7000 });
// };




//   // Admin: add global extra to selected classes (creates pending extra-fee entry for students in selected classes)


//   // const applyGlobalExtraToSelectedClasses = () => {
//   //   const label = (globalExtraLabel || '').trim();
//   //   const amount = Number(globalExtraAmount || 0);
//   //   if (!label || amount <= 0) {
//   //     addToast('Provide valid label and amount for global extra fee.', { type: 'error' });
//   //     return;
//   //   }

//   //   if (selectedClasses.length === 0) {
//   //     addToast('Please select at least one class.', { type: 'error' });
//   //     return;
//   //   }

//   //   // Add to global fees list
//   //   const newGlobalFee = {
//   //     id: Date.now().toString(),
//   //     label,
//   //     amount,
//   //     appliedTo: selectedClasses,
//   //     date: new Date().toLocaleDateString()
//   //   };

//   //   setGlobalFees(prev => [...prev, newGlobalFee]);

//   //   const updated = { ...studentsData };
//   //   Object.keys(updated).forEach(classKey => {
//   //     // Only apply to selected classes
//   //     if (selectedClasses.includes(classKey)) {
//   //       updated[classKey] = updated[classKey].map(s => {
//   //         const copy = { ...s };
//   //         copy.extraFees = copy.extraFees || [];
//   //         copy.extraFees.push({ 
//   //           id: Date.now().toString() + Math.random().toString(36).slice(2), 
//   //           label, 
//   //           amount, 
//   //           status: 'pending',
//   //           globalFeeId: newGlobalFee.id
//   //         });
//   //         return copy;
//   //       });
//   //     }
//   //   });
//   //   setStudentsData(updated);
//   //   setGlobalExtraLabel('');
//   //   setGlobalExtraAmount('');
//   //   setSelectedClasses([]);
//   //   addToast(`Global extra "${label}" added to selected classes.`);
//   // };

//   // Replaces the broken applyGlobalExtraToSelectedClasses implementation
// const applyGlobalExtraToSelectedClasses = () => {
//   const label = (globalExtraLabel || '').trim();
//   const amount = Number(globalExtraAmount || 0);
//   if (!label || amount <= 0) {
//     addToast('Provide valid label and amount for global extra fee.', { type: 'error' });
//     return;
//   }

//   if (!selectedClasses || selectedClasses.length === 0) {
//     addToast('Please select at least one class.', { type: 'error' });
//     return;
//   }

//   // new global fee object
//   const newGlobalFee = {
//     id: Date.now().toString(),
//     label,
//     amount,
//     appliedTo: [...selectedClasses],
//     date: new Date().toLocaleDateString()
//   };

//   // add to globalFees safely
//   setGlobalFees(prev => Array.isArray(prev) ? [...prev, newGlobalFee] : [newGlobalFee]);

//   // safely copy studentsData and add extra fee entries to students in selected classes
//   setStudentsData(prevStudents => {
//     const updated = { ...(prevStudents || {}) };

//     Object.keys(updated).forEach(classKey => {
//       if (selectedClasses.includes(classKey)) {
//         updated[classKey] = (updated[classKey] || []).map(student => {
//           const copy = { ...student };
//           copy.extraFees = Array.isArray(copy.extraFees) ? [...copy.extraFees] : [];
//           // create a unique id using timestamp + random suffix
//           const efId = Date.now().toString() + Math.random().toString(36).slice(2);
//           copy.extraFees.push({
//             id: efId,
//             label,
//             amount,
//             status: 'pending',
//             globalFeeId: newGlobalFee.id,
//             createdAt: new Date().toISOString()
//           });
//           return copy;
//         });
//       }
//     });

//     return updated;
//   });

//   // reset UI fields
//   setGlobalExtraLabel('');
//   setGlobalExtraAmount('');
//   setSelectedClasses([]);
//   addToast(`Global extra "${label}" added to selected classes.`);
// };


//   // Admin: remove global extra fee
//   // const removeGlobalExtraFee = (feeId) => {
//   //   addConfirmToast('Remove this global fee from all students?', () => {
//   //     // Remove from global fees list
//   //     setGlobalFees(prev => prev.filter(fee => fee.id !== feeId));

//   //     // Remove from all students
//   //     const updated = { ...studentsData };
//   //     Object.keys(updated).forEach(classKey => {
//   //       updated[classKey] = updated[classKey].map(s => {
//   //         const copy = { ...s };
//   //         copy.extraFees = (copy.extraFees || []).filter(ef => ef.globalFeeId !== feeId);
//   //         return copy;
//   //       });
//   //     });
//   //     setStudentsData(updated);
//   //     addToast('Global fee removed from all students.');
//   //   }, { duration: 7000 });
//   // };

//   const removeGlobalExtraFee = (feeId) => {
//   addConfirmToast('Remove this global fee from all students?', () => {
//     // remove from global fees
//     setGlobalFees(prev => (Array.isArray(prev) ? prev.filter(f => f.id !== feeId) : []));

//     // remove matching extra fees from each student
//     setStudentsData(prev => {
//       const updated = { ...(prev || {}) };
//       Object.keys(updated).forEach(classKey => {
//         updated[classKey] = (updated[classKey] || []).map(student => {
//           const st = { ...student };
//           st.extraFees = (st.extraFees || []).filter(ef => ef.globalFeeId !== feeId);
//           return st;
//         });
//       });
//       return updated;
//     });

//     addToast('Global fee removed from all students.');
//   }, { duration: 7000 });
// };


//   // Toggle class selection for global extra fees
//   const toggleClassSelection = (classKey) => {
//     if (selectedClasses.includes(classKey)) {
//       setSelectedClasses(selectedClasses.filter(c => c !== classKey));
//     } else {
//       setSelectedClasses([...selectedClasses, classKey]);
//     }
//   };

//   // Select all classes for global extra fees
//   const selectAllClasses = () => {
//     setSelectedClasses(Object.keys(studentsData));
//   };

//   // Deselect all classes for global extra fees
//   const deselectAllClasses = () => {
//     setSelectedClasses([]);
//   };

//   // Admin: add per-student extra (from editing panel)
//   // const addExtraToEditingStudent = () => {
//   //   if (!editingStudent) {
//   //     addToast('No student selected to add extra fee to.', { type: 'error' });
//   //     return;
//   //   }
//   //   const label = (editExtraLabel || '').trim();
//   //   const amount = Number(editExtraAmount || 0);
//   //   if (!label || amount <= 0) {
//   //     addToast('Provide valid label and amount for extra fee.', { type: 'error' });
//   //     return;
//   //   }
//   //   const classKey = editingStudent.classKey;
//   //   setStudentsData(prev => {
//   //     const copy = { ...prev };
//   //     if (!copy[classKey]) return prev;
//   //     const idx = copy[classKey].findIndex(s => s.id === editingStudent.id);
//   //     if (idx === -1) return prev;
//   //     const st = { ...copy[classKey][idx] };
//   //     st.extraFees = st.extraFees || [];
//   //     st.extraFees.push({ id: Date.now().toString() + Math.random().toString(36).slice(2), label, amount, status: 'pending' });
//   //     copy[classKey][idx] = st;
//   //     return copy;
//   //   });
//   //   // refresh editingStudent to show new extra
//   //   setEditingStudent(prev => ({ ...prev, extraFees: [...(prev.extraFees || []), { id: Date.now().toString(), label, amount, status: 'pending' }] }));
//   //   setEditExtraLabel('');
//   //   setEditExtraAmount('');
//   //   addToast('Extra fee added to student.');
//   // };

//   // Replaces addExtraToEditingStudent
// const addExtraToEditingStudent = () => {
//   if (!editingStudent) {
//     addToast('No student selected to add extra fee to.', { type: 'error' });
//     return;
//   }
//   const label = (editExtraLabel || '').trim();
//   const amount = Number(editExtraAmount || 0);
//   if (!label || amount <= 0) {
//     addToast('Provide valid label and amount for extra fee.', { type: 'error' });
//     return;
//   }

//   const classKey = editingStudent.classKey;
//   if (!classKey) {
//     addToast('Editing student has no classKey.', { type: 'error' });
//     return;
//   }

//   // Update studentsData in a safe immutable way
//   setStudentsData(prev => {
//     const copy = { ...(prev || {}) };
//     if (!Array.isArray(copy[classKey])) return prev; // nothing changed if missing
//     const idx = copy[classKey].findIndex(s => s.id === editingStudent.id);
//     if (idx === -1) return prev;
//     const st = { ...copy[classKey][idx] };
//     st.extraFees = Array.isArray(st.extraFees) ? [...st.extraFees] : [];
//     st.extraFees.push({
//       id: Date.now().toString() + Math.random().toString(36).slice(2),
//       label,
//       amount,
//       status: 'pending',
//       createdAt: new Date().toISOString()
//     });
//     copy[classKey] = [...copy[classKey]];
//     copy[classKey][idx] = st;
//     return copy;
//   });

//   // refresh editingStudent in-memory representation
//   setEditingStudent(prev => {
//     const currentExtras = Array.isArray(prev?.extraFees) ? [...prev.extraFees] : [];
//     return { ...prev, extraFees: [...currentExtras, { id: Date.now().toString() + Math.random().toString(36).slice(2), label, amount, status: 'pending' }] };
//   });

//   setEditExtraLabel('');
//   setEditExtraAmount('');
//   addToast('Extra fee added to student.');
// };


//   // Admin: edit student (updates fields)
//   const saveEditedStudent = () => {
//     if (!editingStudent) return;
//     const { classKey, id, name, rollNo, fatherName, monthlyFee, pendingFee, totalPaid, extraFees } = editingStudent;
//     if (!classKey) {
//       addToast('Missing class for student.', { type: 'error' });
//       return;
//     }

//     setStudentsData(prev => {
//       const copy = { ...prev };
//       if (!copy[classKey]) return prev;
//       const idx = copy[classKey].findIndex(s => s.id === id);
//       if (idx === -1) return prev;
//       copy[classKey][idx] = {
//         ...copy[classKey][idx],
//         name: (name || '').trim(),
//         rollNo: (rollNo || '').trim(),
//         fatherName: (fatherName || '').trim(),
//         monthlyFee: Number(monthlyFee) || 0,
//         pendingFee: Number(pendingFee) || 0,
//         totalPaid: Number(totalPaid) || 0,
//         extraFees: Array.isArray(extraFees) ? extraFees : (copy[classKey][idx].extraFees || [])
//       };
//       return copy;
//     });
//     setEditingStudent(null);
//     addToast('Student updated.');
//   };

//   // Admin: mark an extra fee as removed (for a student) - remove pending extra (admin might choose to remove)
//   const removeExtraFromStudent = (classKey, studentId, extraId) => {
//     addConfirmToast('Remove this extra fee for student?', () => {
//       setStudentsData(prev => {
//         const copy = { ...prev };
//         if (!copy[classKey]) return prev;
//         const idx = copy[classKey].findIndex(s => s.id === studentId);
//         if (idx === -1) return prev;
//         const st = { ...copy[classKey][idx] };
//         st.extraFees = (st.extraFees || []).filter(e => e.id !== extraId);
//         copy[classKey][idx] = st;
//         return copy;
//       });
//       addToast('Extra fee removed.');
//     }, { duration: 7000 });
//   };

//   // Admin: delete student (uses confirm toast)
//   const deleteStudent = (classKey, id) => {
//     addConfirmToast('Delete this student?', () => {
//       setStudentsData(prev => {
//         const copy = { ...prev };
//         copy[classKey] = (copy[classKey] || []).filter(s => s.id !== id);
//         return copy;
//       });
//       // if this student was open, close the detail view
//       if (selectedStudent && selectedStudent.id === id && (selectedStudent.className === classKey || selectedStudent.classKey === classKey)) {
//         setSelectedStudent(null);
//         setCurrentPage('admin-dashboard');
//       }
//       addToast('Student deleted.');
//     }, { duration: 7000 });
//   };

//   // Add teacher
//   const addTeacher = () => {
//     const { name, fatherName, cnic, phone, salary, section, qualification, experience, joinDate } = newTeacher;
//     if (!name || !fatherName || !cnic || !phone || !salary || !section) {
//       addToast('Please fill all required fields to add teacher.', { type: 'error' });
//       return;
//     }

//     const newId = teachersData.length > 0 ? Math.max(...teachersData.map(t => t.id)) + 1 : 1;

//     setTeachersData(prev => [
//       ...prev,
//       {
//         id: newId,
//         name: name.trim(),
//         fatherName: fatherName.trim(),
//         cnic: cnic.trim(),
//         phone: phone.trim(),
//         salary: parseInt(salary, 10),
//         section: section.trim(),
//         qualification: qualification.trim(),
//         experience: experience.trim(),
//         joinDate: joinDate || new Date().toLocaleDateString()
//       }
//     ]);

//     setNewTeacher({ name: '', fatherName: '', cnic: '', phone: '', salary: '', section: '', qualification: '', experience: '', joinDate: '' });
//     addToast('Teacher added successfully.');
//   };

//   // Delete teacher
//   const deleteTeacher = (id) => {
//     addConfirmToast('Delete this teacher?', () => {
//       setTeachersData(prev => prev.filter(teacher => teacher.id !== id));
//       addToast('Teacher deleted.');
//     }, { duration: 7000 });
//   };

//   // View teacher details
//   const viewTeacherDetails = (teacher) => {
//     setSelectedTeacher(teacher);
//     setCurrentPage('teacher-details');
//   };

//   // View student profile details
//   const viewStudentProfile = (profile) => {
//     setSelectedStudent(profile);
//     setCurrentPage('student-profile-detail');
//   };

//   // Add DMC for student
//   const addDmc = () => {
//     const { class: className, rollNo, name, fatherName, totalObtained, totalMarks, percentage, grade, position } = dmcStudentInfo;

//     if (!className || !rollNo || !name) {
//       addToast('Please select class and enter student details.', { type: 'error' });
//       return;
//     }

//     // Convert subjects array to object format
//     const subjectsObj = {};
//     dmcSubjects.forEach(subject => {
//       if (subject.obtained && subject.total) {
//         subjectsObj[subject.name] = {
//           obtained: parseInt(subject.obtained),
//           total: parseInt(subject.total),
//           grade: subject.grade || calculateGrade(parseInt(subject.obtained), parseInt(subject.total))
//         };
//       }
//     });

//     setResultsData(prev => {
//       const copy = { ...prev };
//       if (!copy[className]) copy[className] = {};

//       copy[className][rollNo] = {
//         name,
//         rollNo,
//         fatherName,
//         subjects: subjectsObj,
//         totalObtained: parseInt(totalObtained) || calculateTotalObtained(),
//         totalMarks: parseInt(totalMarks) || calculateTotalMarks(),
//         percentage: parseFloat(percentage) || calculatePercentage(),
//         grade: grade || calculateOverallGrade(),
//         position: position || ''
//       };

//       return copy;
//     });

//     // Reset form
//     setDmcSubjects([
//       { name: 'English', obtained: '', total: '', grade: '' },
//       { name: 'Math', obtained: '', total: '', grade: '' },
//       { name: 'Science', obtained: '', total: '', grade: '' },
//       { name: 'Urdu', obtained: '', total: '', grade: '' },
//       { name: 'Islamiat', obtained: '', total: '', grade: '' },
//       { name: 'Social Studies', obtained: '', total: '', grade: '' }
//     ]);

//     setDmcStudentInfo({
//       class: '',
//       rollNo: '',
//       name: '',
//       fatherName: '',
//       totalObtained: 0,
//       totalMarks: 0,
//       percentage: 0,
//       grade: '',
//       position: ''
//     });

//     addToast('DMC added successfully.');
//   };

//   // Helper functions for DMC calculations
//   const calculateTotalObtained = () => {
//     return dmcSubjects.reduce((total, subject) => total + (parseInt(subject.obtained) || 0), 0);
//   };

//   const calculateTotalMarks = () => {
//     return dmcSubjects.reduce((total, subject) => total + (parseInt(subject.total) || 0), 0);
//   };

//   const calculatePercentage = () => {
//     const totalObtained = calculateTotalObtained();
//     const totalMarks = calculateTotalMarks();
//     return totalMarks > 0 ? (totalObtained / totalMarks) * 100 : 0;
//   };

//   const calculateGrade = (obtained, total) => {
//     if (!obtained || !total) return '';
//     const percentage = (obtained / total) * 100;
//     if (percentage >= 90) return 'A+';
//     if (percentage >= 80) return 'A';
//     if (percentage >= 70) return 'B';
//     if (percentage >= 60) return 'C';
//     if (percentage >= 50) return 'D';
//     return 'F';
//   };

//   const calculateOverallGrade = () => {
//     const percentage = calculatePercentage();
//     if (percentage >= 90) return 'A+';
//     if (percentage >= 80) return 'A';
//     if (percentage >= 70) return 'B';
//     if (percentage >= 60) return 'C';
//     if (percentage >= 50) return 'D';
//     return 'F';
//   };

//   // Auto-calculate when subject marks change
//   useEffect(() => {
//     const totalObtained = calculateTotalObtained();
//     const totalMarks = calculateTotalMarks();
//     const percentage = calculatePercentage();
//     const grade = calculateOverallGrade();

//     setDmcStudentInfo(prev => ({
//       ...prev,
//       totalObtained,
//       totalMarks,
//       percentage,
//       grade
//     }));
//   }, [dmcSubjects]);

//   // Load student info when class and roll number are selected
//   useEffect(() => {
//     if (dmcStudentInfo.class && dmcStudentInfo.rollNo) {
//       const classStudents = studentsData[dmcStudentInfo.class] || [];
//       const student = classStudents.find(s => s.rollNo === dmcStudentInfo.rollNo);

//       if (student) {
//         setDmcStudentInfo(prev => ({
//           ...prev,
//           name: student.name,
//           fatherName: student.fatherName
//         }));
//       }
//     }
//   }, [dmcStudentInfo.class, dmcStudentInfo.rollNo, studentsData]);

//   // Delete DMC
//   const deleteDmc = (className, rollNo) => {
//     addConfirmToast('Delete this DMC?', () => {
//       setResultsData(prev => {
//         const copy = { ...prev };
//         if (copy[className] && copy[className][rollNo]) {
//           delete copy[className][rollNo];
//           // Remove class if empty
//           if (Object.keys(copy[className]).length === 0) {
//             delete copy[className];
//           }
//         }
//         return copy;
//       });
//       addToast('DMC deleted successfully.');
//     }, { duration: 7000 });
//   };

//   // Payment handling (supports full, monthly, half, custom)
//   // This will pay base pendingFee first, then pending extra fees in FIFO order.
//   const handlePayment = (e) => {
//     if (e) e.preventDefault();
//     if (!selectedStudent) return;

//     let amountToPay = 0;
//     if (paymentType === 'full') amountToPay = Number(calculateTotalPendingForStudent(selectedStudent) || 0);
//     else if (paymentType === 'monthly') amountToPay = Number(selectedStudent.monthlyFee || 0);
//     else if (paymentType === 'half') {
//       const pending = Number(calculateTotalPendingForStudent(selectedStudent) || 0);
//       amountToPay = Math.ceil(pending / 2);
//     }
//     else if (paymentType === 'custom') amountToPay = parseInt(customAmount, 10) || 0;

//     if (amountToPay <= 0) {
//       addToast('Please enter a valid payment amount.', { type: 'error' });
//       return;
//     }

//     // compute total pending
//     const totalPending = calculateTotalPendingForStudent(selectedStudent);
//     if (amountToPay > totalPending) {
//       addToast('Payment cannot exceed total pending fee.', { type: 'error' });
//       return;
//     }

//     const updated = { ...studentsData };
//     const classKey = selectedStudent.className || selectedStudent.classKey;
//     const studentIndex = updated[classKey].findIndex(s => s.id === selectedStudent.id);
//     if (studentIndex === -1) {
//       addToast('Student not found in data.', { type: 'error' });
//       return;
//     }

//     const studentRef = { ...updated[classKey][studentIndex] }; // shallow copy
//     let remaining = amountToPay;
//     const feeHistoryAdds = [];

//     // 1) Pay base pendingFee first
//     const basePending = Number(studentRef.pendingFee || 0);
//     if (basePending > 0 && remaining > 0) {
//       const payBase = Math.min(basePending, remaining);
//       studentRef.pendingFee = Math.max(0, basePending - payBase);
//       studentRef.totalPaid = (studentRef.totalPaid || 0) + payBase;
//       remaining -= payBase;
//       feeHistoryAdds.push({
//         month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//         amount: payBase,
//         status: 'Paid',
//         date: new Date().toLocaleDateString(),
//         note: 'Base fee'
//       });
//     }

//     // 2) Then pay extras in FIFO order
//     studentRef.extraFees = studentRef.extraFees || [];
//     for (let i = 0; i < studentRef.extraFees.length && remaining > 0; i++) {
//       const ef = { ...studentRef.extraFees[i] };
//       if (ef.status === 'pending') {
//         const efAmount = Number(ef.amount || 0);
//         if (remaining >= efAmount) {
//           // fully pay this extra
//           ef.status = 'paid';
//           ef.datePaid = new Date().toLocaleDateString();
//           remaining -= efAmount;
//           studentRef.totalPaid = (studentRef.totalPaid || 0) + efAmount;
//           feeHistoryAdds.push({
//             month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//             amount: efAmount,
//             status: 'Paid',
//             date: ef.datePaid,
//             note: ef.label
//           });
//         } else {
//           // partial payment on an extra -> decrease ef.amount and add a payment record
//           ef.amount = Number(efAmount - remaining);
//           // record a paid portion entry in feeHistory
//           const paidPortion = remaining;
//           studentRef.totalPaid = (studentRef.totalPaid || 0) + paidPortion;
//           feeHistoryAdds.push({
//             month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
//             amount: paidPortion,
//             status: 'Paid (partial)',
//             date: new Date().toLocaleDateString(),
//             note: ef.label + ' (partial)'
//           });
//           remaining = 0;
//         }
//         studentRef.extraFees[i] = ef;
//       }
//     }

//     // update feeHistory: append entries
//     studentRef.feeHistory = studentRef.feeHistory || [];
//     studentRef.feeHistory.push(...feeHistoryAdds);

//     // update dataset
//     updated[classKey][studentIndex] = studentRef;
//     setStudentsData(updated);

//     // update selectedStudent state to reflect new values
//     setSelectedStudent({ ...studentRef, className: classKey });

//     // clear custom amount
//     setCustomAmount('');
//     setPaymentType('full');
//     addToast(`Payment of Rs. ${amountToPay.toLocaleString()} processed successfully!`);
//   };

//   // ---------- PRINTING (Landscape, 2 students per page, each with School & Student copy) ----------
//   const chunk = (arr, size) => {
//     const out = [];
//     for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//     return out;
//   };

//   const escapeHtml = (str = '') => String(str).replace(/[&<>"']/g, function (m) {
//     return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
//   });

//   const formatPrintCurrency = (n) => `Rs. ${Number(n || 0).toLocaleString()}`;

//   const buildPrintableHtml = (students = [], title = 'IGPS Fee Statements') => {
//     // students array expected to have classKey in each
//     const pages = chunk(students, 2); // 2 students per page
//     return `
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8"/>
// <title>${escapeHtml(title)}</title>
//     <style>
//   @page {
//     size: A4 landscape;
//     margin: 10mm;
//   }
//   html, body {
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     color: #111;
//   }
//   .page {
//     box-sizing: border-box;
//     display: grid;
//     gap:.6rem;
//     height:100%;
//     width:100%;
//     grid-template-columns: repeat(2, 1fr);
//     place-contents: center;
//     margin-bottom: 4rem;
//     margin-top: 2rem;
//     // border: 1px solid black;
//     overflow: hidden;
//     place-items:center;

//   }
//   .student-block {
//     display:flex;
//     flex-direction: column;
//     gap: 1mm;
//     height:100%;
//     border-radius: 8px;
//   }
//   .receipt {
//     border: 2px dashed #888;
//     padding: 3mm;
//     height:310px;
//     width:500px;
//     border-radius: 10px;
//     position: relative;
//     background: #fff;
//     overflow: hidden;
//   }
//   .receipt .watermark {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 280px;
//     opacity: 0.15;
//     transform: translate(-50%, -50%);
//     z-index: 0;
//     pointer-events: none;
//   }
//   .receipt .content { position: relative; z-index: 1; }
//   .header { font-size: 18px; font-weight: bold; color: #0b5ed7; margin-bottom: 2px; }
//   .school-no { font-size: 12px; font-weight: bold; color: #333; margin-bottom: 6px; }
//   .meta { font-size: 12px; color: #555; margin-bottom: 8px; }
//   .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
//   .fee-box { border: 1px solid #ccc; border-radius: 6px; padding: 6px; text-align: center; background: #fff; }
//   .fee-label { font-size: 12px; color: #555; }
//   .fee-value { font-size: 15px; font-weight: bold; margin-top: 4px; }
//   .copy-label { text-align: right; font-size: 11px; color: #888; font-style: italic; }
//   .extras { margin-top:8px; font-size:12px; }
//     </style>
// </head>
// <body>
// ${pages.map(page => `<div class="page">${page.map(s => {
//       // compute base pending + extras pending
//       const basePending = Number(s.pendingFee || 0);
//       const extrasPending = (s.extraFees || []).reduce((acc, ef) => acc + (ef.status === 'pending' ? Number(ef.amount || 0) : 0), 0);
//       const total = (s.monthlyFee || 0) + basePending - 0 + extrasPending; // monthly + pending extras (keeps parity)
//       return `
//         <div class="student-block">
//           <!-- School Copy -->
//           <div class="receipt">
//             <img src="../public/LOGO.jpg" class="watermark" alt="Logo"/>
//             <div class="content">
//               <div class="copy-label">School Copy</div>
//               <div class="header">Iqra Grammar Public School</div>
//               <div class="school-no">Ph: 03365716844</div>
//               <div class="meta">Fee Statement • ${new Date().toLocaleDateString()}</div>
//               <div><b>Student:</b> ${escapeHtml(s.name)} (Roll: ${escapeHtml(s.rollNo || "")})</div>
//               <div><b>Father:</b> ${escapeHtml(s.fatherName || "")}</div>
//               <div><b>Class:</b> ${escapeHtml(s.classKey || "")}</div>
//               <div class="grid">
//                 <div class="fee-box"><div class="fee-label">Monthly Fee</div><div class="fee-value">${formatPrintCurrency(s.monthlyFee)}</div></div>
//                 <div class="fee-box"><div class="fee-label">Pending (Base)</div><div class="fee-value">${formatPrintCurrency(basePending)}</div></div>
//               </div>
//               <div class="extras">
//                 <div><b>Extra Fees:</b></div>
//                 ${(s.extraFees || []).length === 0 ? '<div class="text-muted">None</div>' : (s.extraFees.map(ef => `<div>${escapeHtml(ef.label)}: ${formatPrintCurrency(ef.amount)} ${ef.status === 'paid' ? '(PAID)' : ''}</div>`).join(''))}
//               </div>
//               <div style="margin-top:6px;"><b>Total Due:</b> ${formatPrintCurrency(basePending + extrasPending)}</div>
//             </div>
//           </div>

//           <!-- Student Copy -->
//           <div class="receipt">
//             <img src="../public/LOGO.jpg" class="watermark" alt="Logo"/>
//               <div class="content">
//               <div class="copy-label">Student Copy</div>
//               <div class="header">Iqra Grammar Public School</div>
//               <div class="school-no">Ph: 03365716844</div>
//               <div class="meta">Fee Statement • ${new Date().toLocaleDateString()}</div>
//               <div class="meta">Due date • 5 ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
//               <div><b>Student:</b> ${escapeHtml(s.name)} (Roll: ${escapeHtml(s.rollNo || "")})</div>
//               <div><b>Father:</b> ${escapeHtml(s.fatherName || "")}</div>
//               <div><b>Class:</b> ${escapeHtml(s.classKey || "")}</div>
//               <div class="grid">
//                 <div class="fee-box"><div class="fee-label">Monthly Fee</div><div class="fee-value">${formatPrintCurrency(s.monthlyFee)}</div></div>
//                 <div class="fee-box"><div class="fee-label">Pending (Base)</div><div class="fee-value">${formatPrintCurrency(basePending)}</div></div>
//               </div>
//               <div class="extras">
//                 <div><b>Extra Fees:</b></div>
//                 ${(s.extraFees || []).length === 0 ? '<div class="text-muted">None</div>' : (s.extraFees.map(ef => `<div>${escapeHtml(ef.label)}: ${formatPrintCurrency(ef.amount)} ${ef.status === 'paid' ? '(PAID)' : ''}</div>`).join(''))}
//               </div>
//               <div style="margin-top:6px;"><b>Total Due:</b> ${formatPrintCurrency(basePending + extrasPending)}</div>
//             </div>
//           </div>
//         </div>
//       `;
//     }).join('')}</div>`).join('')}
// </body>
// </html>
// `;
//   };

//   // Build DMC printable HTML
//   const buildDmcPrintableHtml = (student = {}) => {
//     return `
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8"/>
// <title>IGPS - DMC</title>
// <style>
//   @page {
//     size: A4 portrait;
//     margin: 15mm;
//   }
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//     color: #111;
//     background: #fff;
//   }
//   .dmc-container {
//     width: 100%;
//     max-width: 800px;
//     margin: 0 auto;
//     padding: 20px;
//     border: 2px solid #000;
//     position: relative;
//     min-height: 100vh;
//     box-sizing: border-box;
//   }
//   .watermark {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 300px;
//     opacity: 0.1;
//     transform: translate(-50%, -50%);
//     z-index: 0;
//     pointer-events: none;
//   }
//   .content {
//     position: relative;
//     z-index: 1;
//   }
//   .header {
//     text-align: center;
//     margin-bottom: 20px;
//     border-bottom: 2px solid #000;
//     padding-bottom: 10px;
//   }
//   .school-name {
//     font-size: 24px;
//     font-weight: bold;
//     color: #0b5ed7;
//     margin-bottom: 5px;
//   }
//   .school-address {
//     font-size: 14px;
//     color: #555;
//   }
//   .student-info {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     margin-bottom: 20px;
//   }
//   .info-item {
//     display: flex;
//   }
//   .info-label {
//     font-weight: bold;
//     min-width: 100px;
//   }
//   .results-table {
//     width: 100%;
//     border-collapse: collapse;
//     margin-bottom: 20px;
//   }
//   .results-table th,
//   .results-table td {
//     border: 1px solid #000;
//     padding: 8px;
//     text-align: center;
//   }
//   .results-table th {
//     background-color: #f0f0f0;
//     font-weight: bold;
//   }
//   .summary {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 20px;
//     margin-bottom: 20px;
//   }
//   .summary-item {
//     padding: 10px;
//     border: 1px solid #000;
//     text-align: center;
//   }
//   .summary-value {
//     font-size: 18px;
//     font-weight: bold;
//     margin-top: 5px;
//   }
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: 20px;
//     margin-top: 40px;
//   }
//   .signature {
//     text-align: center;
//     border-top: 1px solid #000;
//     padding-top: 40px;
//   }
//   .footer {
//     text-align: center;
//     margin-top: 30px;
//     font-size: 12px;
//     color: #555;
//   }
//   @media print {
//     .dmc-container {
//       border: none;
//     }
//   }
// </style>
// </head>
// <body>
//   <div class="dmc-container">
//     <img src="../public/LOGO.jpg" class="watermark" alt="School Logo"/>
//     <div class="content">
//       <div class="header">
//         <div class="school-name">IQRA GRAMMAR PUBLIC SCHOOL</div>
//         <div class="school-address">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</div>
//         <div class="school-address">Phone: 03365716844</div>
//         <h2>Detailed Marks Certificate</h2>
//         <div>Academic Year: ${new Date().getFullYear() - 1}-${new Date().getFullYear()}</div>
//       </div>

//       <div class="student-info">
//         <div class="info-item">
//           <span class="info-label">Student Name:</span>
//           <span>${escapeHtml(student.name || '')}</span>
//         </div>
//         <div class="info-item">
//           <span class="info-label">Father Name:</span>
//           <span>${escapeHtml(student.fatherName || '')}</span>
//         </div>
//         <div class="info-item">
//           <span class="info-label">Class:</span>
//           <span>${escapeHtml(student.className || '')}</span>
//         </div>
//         <div class="info-item">
//           <span class="info-label">Roll No:</span>
//           <span>${escapeHtml(student.rollNo || '')}</span>
//         </div>
//       </div>

//       <table class="results-table">
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Obtained Marks</th>
//             <th>Total Marks</th>
//             <th>Percentage</th>
//             <th>Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${student.subjects ? Object.entries(student.subjects).map(([subject, data]) => `
//             <tr>
//               <td>${escapeHtml(subject)}</td>
//               <td>${data.obtained}</td>
//               <td>${data.total}</td>
//               <td>${((data.obtained / data.total) * 100).toFixed(2)}%</td>
//               <td>${data.grade}</td>
//             </tr>
//           `).join('') : ''}
//         </tbody>
//       </table>

//       <div class="summary">
//         <div class="summary-item">
//           <div>Total Obtained Marks</div>
//           <div class="summary-value">${student.totalObtained || 0}</div>
//         </div>
//         <div class="summary-item">
//           <div>Total Marks</div>
//           <div class="summary-value">${student.totalMarks || 0}</div>
//         </div>
//         <div class="summary-item">
//           <div>Percentage</div>
//           <div class="summary-value">${student.percentage ? student.percentage.toFixed(2) + '%' : '0%'}</div>
//         </div>
//         <div class="summary-item">
//           <div>Overall Grade</div>
//           <div class="summary-value">${student.grade || 'N/A'}</div>
//         </div>
//         <div class="summary-item">
//           <div>Position in Class</div>
//           <div class="summary-value">${student.position || 'N/A'}</div>
//         </div>
//         <div class="summary-item">
//           <div>Remarks</div>
//           <div class="summary-value">${student.percentage >= 80 ? 'Excellent' : student.percentage >= 70 ? 'Good' : student.percentage >= 60 ? 'Average' : 'Needs Improvement'}</div>
//         </div>
//       </div>

//       <div class="signatures">
//         <div class="signature">
//           <div>Class Teacher</div>
//         </div>
//         <div class="signature">
//           <div>Principal</div>
//         </div>
//         <div class="signature">
//           <div>Parent/Guardian</div>
//         </div>
//       </div>

//       <div class="footer">
//         <p>Generated on: ${new Date().toLocaleDateString()}</p>
//         <p>© ${new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
//       </div>
//     </div>
//   </div>
// </body>
// </html>
// `;
//   };

//   // Build Leaving Certificate printable HTML
//   const buildLeavingCertificateHtml = (student = {}) => {
//     return `
// <!doctype html>
// <html>
// <head>
// <meta charset="utf-8"/>
// <title>IGPS - Leaving Certificate</title>
// <style>
//   @page {
//     size: A4 portrait;
//     margin: 15mm;
//   }
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Times New Roman', serif;
//     color: #000;
//     background: #fff;
//     line-height: 1.6;
//   }
//   .certificate-container {
//     width: 100%;
//     max-width: 800px;
//     margin: 0 auto;
//     padding: 30px;
//     border: 2px solid #000;
//     position: relative;
//     min-height: 100vh;
//     box-sizing: border-box;
//   }
//   .watermark {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 400px;
//     opacity: 0.1;
//     transform: translate(-50%, -50%);
//     z-index: 0;
//     pointer-events: none;
//   }
//   .content {
//     position: relative;
//     z-index: 1;
//   }
//   .header {
//     text-align: center;
//     margin-bottom: 30px;
//     border-bottom: 2px solid #000;
//     padding-bottom: 20px;
//   }
//   .school-name {
//     font-size: 28px;
//     font-weight: bold;
//     text-transform: uppercase;
//     margin-bottom: 10px;
//     letter-spacing: 2px;
//   }
//   .school-address {
//     font-size: 16px;
//     margin-bottom: 5px;
//   }
//   .certificate-title {
//     font-size: 24px;
//     font-weight: bold;
//     text-decoration: underline;
//     margin: 30px 0;
//     text-align: center;
//   }
//   .certificate-text {
//     font-size: 18px;
//     text-align: justify;
//     margin-bottom: 20px;
//   }
//   .student-details {
//     margin: 30px 0;
//     padding: 20px;
//     border: 1px solid #000;
//     background: #f9f9f9;
//   }
//   .detail-row {
//     display: flex;
//     margin-bottom: 10px;
//   }
//   .detail-label {
//     font-weight: bold;
//     min-width: 150px;
//   }
//   .signatures {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 40px;
//     margin-top: 60px;
//   }
//   .signature {
//     text-align: center;
//     border-top: 1px solid #000;
//     padding-top: 60px;
//   }
//   .signature-name {
//     font-weight: bold;
//     margin-top: 10px;
//   }
//   .footer {
//     text-align: center;
//     margin-top: 40px;
//     font-size: 14px;
//     color: 555;
//   }
//   .seal {
//     position: absolute;
//     right: 50px;
//     bottom: 100px;
//     width: 120px;
//     opacity: 0.8;
//   }
//   @media print {
//     .certificate-container {
//       border: none;
//     }
//   }
// </style>
// </head>
// <body>
//   <div class="certificate-container">
//     <img src="../public/LOGO.jpg" class="watermark" alt="School Logo"/>

//     <div class="content">
//       <div class="header">
//         <div class="school-name">IQRA GRAMMAR PUBLIC SCHOOL</div>
//         <div class="school-address">Gulshan Hameed Colony, Opposite Wensum College</div>
//         <div class="school-address">Dera Ismail Khan, KPK, Pakistan</div>
//         <div class="school-address">Phone: 03365716844 | Email: igps44@gmail.com</div>
//       </div>

//       <div class="certificate-title">LEAVING CERTIFICATE</div>

//       <div class="certificate-text">
//         This is to certify that <span class="font-bold">${escapeHtml(student.name || '[Student Name]')}</span>, 
//         son/daughter of <span class="font-bold">${escapeHtml(student.fatherName || '[Father Name]')}</span>, 
//         was a bona fide student of this school from <span class="font-bold">[Admission Date]</span> 
//         to <span class="font-bold">[Leaving Date]</span>.
//       </div>

//       <div class="certificate-text">
//         He/She was studying in class <span class="font-bold">${escapeHtml(student.className || '[Class]')}</span> 
//         and his/her roll number was <span class="font-bold">${escapeHtml(student.rollNo || '[Roll Number]')}</span>.
//       </div>

//       <div class="certificate-text">
//         His/Her conduct during the stay in the school was <span class="font-bold">[Conduct]</span> 
//         and he/she has shown <span class="font-bold">[Academics Performance]</span> in studies.
//       </div>

//       <div class="certificate-text">
//         He/She has paid all the dues of the school and has no outstanding amount against him/her.
//       </div>

//       <div class="certificate-text">
//         We wish him/her success in all future endeavors.
//       </div>

//       <div class="student-details">
//         <div class="detail-row">
//           <span class="detail-label">Certificate Number:</span>
//           <span>IGPS/LC/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}</span>
//         </div>
//         <div class="detail-row">
//           <span class="detail-label">Date of Issue:</span>
//           <span>${new Date().toLocaleDateString()}</span>
//         </div>
//         <div class="detail-row">
//           <span class="detail-label">Reason for Leaving:</span>
//           <span>[Reason]</span>
//         </div>
//       </div>

//       <div class="signatures">
//         <div class="signature">
//           <div>_________________________</div>
//           <div class="signature-name">Class Teacher</div>
//           <div>${escapeHtml(student.className || '[Class]')}</div>
//         </div>
//         <div class="signature">
//           <div>_________________________</div>
//           <div class="signature-name">Principal</div>
//           <div>Iqra Grammar Public School</div>
//         </div>
//       </div>

//       <div class="footer">
//         <p>Note: This is a computer generated certificate and does not require signature.</p>
//         <p>© ${new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
//       </div>

//       <img src="../public/LOGO.jpg" class="seal" alt="School Seal"/>
//     </div>
//   </div>
// </body>
// </html>
// `;
//   };

//   const openPrintWindow = (html) => {
//     const newWin = window.open('', '_blank');
//     if (!newWin) {
//       addToast('Popup blocked — allow popups to print.', { type: 'error', duration: 3000 });
//       return;
//     }
//     newWin.document.open();
//     newWin.document.write(html);
//     newWin.document.close();
//     // small delay to let fonts / layout settle
//     setTimeout(() => {
//       newWin.focus();
//       newWin.print();
//       // do not close automatically — let user decide
//     }, 500);
//   };

//   // Print single student (renders one student in printable HTML)
//   const handleOpenPrintable = () => {
//     if (!selectedStudent) {
//       addToast('Nothing to print', { type: 'error' });
//       return;
//     }
//     const html = buildPrintableHtml([{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }], 'IGPS - Student Fee Statement');
//     openPrintWindow(html);
//   };

//   // Print DMC
//   const handlePrintDmc = () => {
//     if (!selectedStudent) {
//       addToast('Nothing to print', { type: 'error' });
//       return;
//     }
//     const html = buildDmcPrintableHtml(selectedStudent);
//     openPrintWindow(html);
//   };

//   // Print Leaving Certificate
//   const handlePrintLeavingCertificate = () => {
//     if (!selectedStudent) {
//       addToast('Please select a student first', { type: 'error' });
//       return;
//     }
//     const html = buildLeavingCertificateHtml(selectedStudent);
//     openPrintWindow(html);
//   };

//   // Print all students of a class (2 per page)
//   const handlePrintClass = (classKey) => {
//     const arr = (studentsData[classKey] || []).map(s => ({ ...s, classKey }));
//     if (!arr.length) {
//       addToast('No students in this class.', { type: 'error' });
//       return;
//     }
//     const html = buildPrintableHtml(arr, `IGPS - ${classKey} Fee Statements`)
//     openPrintWindow(html);
//   };

//   // Admin search (live)
//   const getFilteredStudents = () => {
//     if (!searchTerm) return [];
//     const all = getAllStudents();
//     return all.filter(s =>
//       s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (s.fatherName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (s.rollNo || '').includes(searchTerm) ||
//       (s.classKey || '').includes(searchTerm)
//     );
//   };

//   // Download currently shown printable area as HTML file
//   // const handleDownloadHtml = () => {
//   //   if (!selectedStudent && Object.keys(studentsData).length === 0) {
//   //     addToast('Nothing to download', { type: 'error' });
//   //     return;
//   //   }

//   //   // If a student is selected, download that student only; otherwise download whole data
//   //   const toDownload = selectedStudent ? [{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }] : getAllStudents();
//   //   const html = buildPrintableHtml(toDownload, 'igps-fee-statements');
//   //   const blob = new Blob([html], { type: 'text/html' });
//   //   const url = URL.createObjectURL(blob);
//   //   const a = document.createElement('a');
//   //   a.href = url;
//   //   a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-fee' : 'igps-fee-statements') + '.html';
//   //   document.body.appendChild(a);
//   //   a.click();
//   //   a.remove();
//   //   URL.revokeObjectURL(url);
//   //   addToast('Downloaded HTML');
//   // };
//   const handleDownloadHtml = () => {
//   const hasStudents = selectedStudent || (Object.keys(studentsData || {}).length > 0);
//   if (!hasStudents) {
//     addToast('Nothing to download', { type: 'error' });
//     return;
//   }
//   const toDownload = selectedStudent ? [{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }] : getAllStudents();
//   const html = buildPrintableHtml(toDownload, 'igps-fee-statements');
//   const blob = new Blob([html], { type: 'text/html' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-fee' : 'igps-fee-statements') + '.html';
//   document.body.appendChild(a);
//   a.click();
//   a.remove();
//   URL.revokeObjectURL(url);
//   addToast('Downloaded HTML');
// };


//   // Download DMC as HTML
//   const handleDownloadDmc = () => {
//     if (!selectedStudent) {
//       addToast('Nothing to download', { type: 'error' });
//       return;
//     }

//     const html = buildDmcPrintableHtml(selectedStudent);
//     const blob = new Blob([html], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-dmc' : 'igps-dmc') + '.html';
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//     addToast('DMC downloaded');
//   };

//   // Download Leaving Certificate as HTML
//   const handleDownloadLeavingCertificate = () => {
//     if (!selectedStudent) {
//       addToast('Please select a student first', { type: 'error' });
//       return;
//     }

//     const html = buildLeavingCertificateHtml(selectedStudent);
//     const blob = new Blob([html], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-leaving-cert' : 'igps-leaving-cert') + '.html';
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//     addToast('Leaving Certificate downloaded');
//   };

//   // Update subject field in DMC form
//   const updateDmcSubject = (index, field, value) => {
//     const updatedSubjects = [...dmcSubjects];
//     updatedSubjects[index] = {
//       ...updatedSubjects[index],
//       [field]: value
//     };

//     // Auto-calculate grade if obtained and total are provided
//     if (field === 'obtained' || field === 'total') {
//       const obtained = parseInt(updatedSubjects[index].obtained) || 0;
//       const total = parseInt(updatedSubjects[index].total) || 0;

//       if (obtained > 0 && total > 0) {
//         updatedSubjects[index].grade = calculateGrade(obtained, total);
//       }
//     }

//     setDmcSubjects(updatedSubjects);
//   };

//   // Add new subject field
//   const addNewSubject = () => {
//     setDmcSubjects([...dmcSubjects, { name: '', obtained: '', total: '', grade: '' }]);
//   };

//   // Remove subject field
//   const removeSubject = (index) => {
//     if (dmcSubjects.length > 1) {
//       const updatedSubjects = [...dmcSubjects];
//       updatedSubjects.splice(index, 1);
//       setDmcSubjects(updatedSubjects);
//     }
//   };

//   // Basic Navigation component with mobile toggle
//   const Navigation = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Close mobile menu when clicking outside
//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
//           setIsMobileMenuOpen(false);
//         }
//       };

//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, [isMobileMenuOpen]);

//     return (
//       <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg nav-container">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-3">
//               <School className="h-8 w-8" />
//               <div>
//                 <span className="font-bold text-xl">IGPS</span>
//                 <p className="text-xs text-blue-100">Iqra Grammar Public School</p>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <button 
//               className="mobile-menu-button md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>

//             <div className={`nav-items md:flex space-x-4 ${isMobileMenuOpen ? 'open' : ''}`}>
//               <button onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                 <Home className="h-4 w-4" />
//                 <span>Home</span>
//               </button>
//               <button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                 <BookOpen className="h-4 w-4" />
//                 <span>About</span>
//               </button>
//               <button onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </button>
//               <button onClick={() => { setCurrentPage('fees'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                 <DollarSign className="h-4 w-4" />
//                 <span>Fees</span>
//               </button>
//               <button onClick={() => { setCurrentPage('dmc'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                 <FileText className="h-4 w-4" />
//                 <span>DMC</span>
//               </button>

//               {!isAdminLoggedIn ? (
//                 <button onClick={() => { setCurrentPage('admin-login'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
//                   <Settings className="h-4 w-4" />
//                   <span>Admin</span>
//                 </button>
//               ) : (
//                 <>
//                   <button onClick={() => { setCurrentPage('admin-dashboard'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                     <Settings className="h-4 w-4" />
//                     <span>Dashboard</span>
//                   </button>
//                   <button onClick={() => { setCurrentPage('admin-search'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                     <Search className="h-4 w-4" />
//                     <span>Search</span>
//                   </button>
//                   <button onClick={() => { setCurrentPage('admin-student-profiles'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                     <User className="h-4 w-4" />
//                     <span>Student Profiles</span>
//                   </button>
//                   <button onClick={() => { setCurrentPage('leaving-certificate'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
//                     <FileText className="h-4 w-4" />
//                     <span>Leaving Cert</span>
//                   </button>
//                   <button onClick={() => { setIsAdminLoggedIn(false); setCurrentPage('home'); setLoginForm({ username: '', password: '' }); setIsMobileMenuOpen(false); }} className="hover:text-red-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700">
//                     <LogOut className="h-4 w-4" />
//                     <span>Logout</span>
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//     <Navigation />

//       {/* Toast container (top-right) */}
//       <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
//         {toasts.map(t => {
//           const bg = t.type === 'error' ? 'bg-red-600' : (t.type === 'confirm' ? 'bg-yellow-500' : 'bg-green-600');
//           return (
//             <div key={t.id} className={`${bg} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm animate-slideIn`}>
//               <div className="flex items-center justify-between gap-3">
//                 <div className="text-sm">{t.message}</div>
//                 {t.confirm ? (
//                   <div className="flex gap-2">
//                     <button onClick={() => { t.onConfirm && t.onConfirm(); removeToast(t.id); }} className="bg-white text-black px-2 py-1 rounded text-sm">Yes</button>
//                     <button onClick={() => removeToast(t.id)} className="bg-white text-black px-2 py-1 rounded text-sm">No</button>
//                   </div>
//                 ) : (
//                   <button onClick={() => removeToast(t.id)} className="text-white opacity-90 text-sm">✕</button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* HOME */}
//       {currentPage === 'home' && (
//         <div className="container mx-auto px-4 py-12">
//         <Slider />
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-8 text-gray-800">Quick Access</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center space-x-2 transition-colors">
//                 <DollarSign className="h-5 w-5" />
//                 <span>Check Fees</span>
//               </button>
//               <button onClick={() => { setCurrentPage('dmc'); setUserType(''); }} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 flex items-center space-x-2 transition-colors">
//                 <FileText className="h-5 w-5" />
//                 <span>Check Results</span>
//               </button>
//               <button onClick={() => setCurrentPage('about')} className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition-colors">
//                 <BookOpen className="h-5 w-5" />
//                 <span>Learn More</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ABOUT */}
//       {currentPage === 'about' && (
//         <div className="container mx-auto px-4 py-12 max-w-6xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About IGPS</h1>

//           <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div>
//                 <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Story</h2>
//                 <p className="text-lg text-gray-700 mb-6 leading-relaxed">Iqra Grammar Public School has been a beacon of educational excellence for over two decades. Founded with the vision to provide quality education to all segments of society, our institution is committed to nurturing both academic achievement and character development.</p>
//                 <p className="text-lg text-gray-700 leading-relaxed">We believe in creating an environment where students can explore their potential, develop critical thinking skills, and prepare for the challenges of tomorrow through a balanced approach to education.</p>
//               </div>
//               <div className="bg-blue-50 p-8 rounded-lg">
//                 <School className="h-20 w-20 text-blue-600 mx-auto mb-6" />
//                 <h3 className="text-2xl font-semibold text-center mb-4">School Statistics</h3>
//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-blue-600">500+</div>
//                     <div className="text-sm text-gray-600">Students</div>
//                   </div>
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-green-600">25+</div>
//                     <div className="text-sm text-gray-600">Teachers</div>
//                   </div>
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-purple-600">15+</div>
//                     <div className="text-sm text-gray-600">Classes</div>
//                   </div>
//                   <div className="bg-white p-4 rounded shadow">
//                     <div className="text-3xl font-bold text-orange-600">20+</div>
//                     <div className="text-sm text-gray-600">Years</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-blue-50 p-8 rounded-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
//               <p className="text-gray-700 leading-relaxed">To be a leading educational institution that empowers students to become confident, creative, and responsible global citizens who contribute positively to society through knowledge, skills, and ethical values.</p>
//             </div>
//             <div className="bg-green-50 p-8 rounded-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h3>
//               <p className="text-gray-700 leading-relaxed">To provide exceptional education through innovative teaching methodologies, character building programs, and fostering a love for lifelong learning in a supportive and inclusive environment.</p>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-10 mt-12">
//             <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose IGPS?</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="flex items-start space-x-4">
//                 <Award className="h-8 w-8 text-blue-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Academic Excellence</h4>
//                   <p className="text-gray-600">Consistent outstanding results in board examinations</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <User className="h-8 w-8 text-green-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Qualified Teachers</h4>
//                   <p className="text-gray-600">Highly educated and experienced teaching staff</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <BarChart3 className="h-8 w-8 text-purple-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Modern Curriculum</h4>
//                   <p className="text-gray-600">Balanced curriculum with focus on STEM and arts</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <BookOpen className="h-8 w-8 text-red-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Library Resources</h4>
//                   <p className="text-gray-600">Well-stocked library with digital resources</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <GraduationCap className="h-8 w-8 text-orange-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Career Guidance</h4>
//                   <p className="text-gray-600">Comprehensive career counseling for students</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <Settings className="h-8 w-8 text-indigo-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Technology Integration</h4>
//                   <p className="text-gray-600">Smart classrooms and computer lab facilities</p>
//                 </div>
//               </div>
//             </div>
//             </div>
//         </div>
//       )}

//       {/* CONTACT */}
//       {currentPage === 'contact' && (
//         <div className="container mx-auto px-4 py-12 max-w-6xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Us</h1>

//           <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
//             <div className="grid lg:grid-cols-2 gap-12">
//               <div>
//                 <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
//                     <Phone className="h-8 w-8 text-blue-600" />
//                     <div>
//                       <p className="font-semibold text-lg">Phone</p>
//                       <p className="text-gray-700">+92 3365716844</p>
//                       <p className="text-gray-700">+92 3335333946</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
//                     <BookOpen className="h-8 w-8 text-green-600" />
//                     <div>
//                       <p className="font-semibold text-lg">Email</p>
//                       <p className="text-gray-700">IGPS44@gmail.com</p>
//                       <p className="text-gray-700">info@igps.edu.pk</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
//                     <Home className="h-8 w-8 text-purple-600 mt-1" />
//                     <div>
//                       <p className="font-semibold text-lg">Address</p>
//                       <p className="text-gray-700">Main campus Gulshan hameed colony</p>
//                       <p className="text-gray-700">Opposite wensum college</p>
//                       <p className="text-gray-700">Dera Ismail khan, KPK, Pakistan</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-3xl font-semibold mb-8">Office Hours</h2>
//                 <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
//                   <div className="flex justify-between py-3 border-b">
//                     <span className="font-semibold">Monday - Thursday:</span>
//                     <span className="text-gray-700">8:00 AM - 3:00 PM</span>
//                   </div>
//                   <div className="flex justify-between py-3 border-b">
//                     <span className="font-semibold">Friday:</span>
//                     <span className="text-gray-700">8:00 AM - 12:00 PM</span>
//                   </div>
//                   <div className="flex justify-between py-3 border-b">
//                     <span className="font-semibold">Saturday:</span>
//                     <span className="text-gray-700">9:00 AM - 12:00 PM</span>
//                   </div>
//                   <div className="flex justify-between py-3">
//                     <span className="font-semibold">Sunday:</span>
//                     <span className="text-red-600">Closed</span>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h3 className="text-xl font-semibold mb-4">School Leadership</h3>
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                       <span className="font-medium">Principal:</span>
//                       <span className="text-gray-700">Mr. Muhammad Ali</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                       <span className="font-medium">Vice Principal:</span>
//                       <span className="text-gray-700">Ms. Fatima Khan</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                       <span className="font-medium">Academic Coordinator:</span>
//                       <span className="text-gray-700">Mr. Ahmed Hassan</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-10">
//             <h2 className="text-3xl font-semibold mb-8 text-center">Location Map</h2>
//             <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
//               <div className="text-center">
//                 <Home className="h-12 w-12 text-gray-500 mx-auto mb-4" />
//                 <p className="text-gray-600">Map would be displayed here</p>
//                 <p className="text-sm text-gray-500 mt-2">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</p>
//               </div>
//             </div>
//             </div>
//         </div>
//       )}

//       {/* DMC - choice page */}
//       {currentPage === 'dmc' && !userType && (
//         <div className="container mx-auto px-4 py-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Results (DMC)</h1>
//           <div className="max-w-md mx-auto">
//             <div className="bg-white rounded-xl shadow-lg p-10">
//               <h2 className="text-2xl font-semibold mb-8 text-center">Check Your Results</h2>
//               <div className="space-y-6">
//                 <button onClick={() => { setUserType('student'); setCurrentPage('dmc'); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center justify-center space-x-3">
//                   <FileText className="h-6 w-6" />
//                   <span className="text-lg font-semibold">View DMC</span>
//                 </button>
//                 <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 flex items-center justify-center space-x-3">
//                   <Settings className="h-6 w-6" />
//                   <span className="text-lg font-semibold">Administration</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//      {/* DMC - student form */}
//   {currentPage === 'dmc' && userType === 'student' && (
//   <div className="container mx-auto px-4 py-12">
//     <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student DMC Portal</h1>
//     <div className="max-w-md mx-auto">
//       <div className="bg-white rounded-xl shadow-lg p-10">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
//         <form onSubmit={handleDmcSearch} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
//             <input type="text" placeholder="Full Name" value={studentInfo.name} onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
//             <select value={studentInfo.class} onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none">
//               <option value="">Select Class</option>
//               {Object.keys(studentsData).map(k => (
//                 <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
//             <input type="text" placeholder="Roll Number" value={studentInfo.rollNo} onChange={(e) => setStudentInfo({ ...studentInfo, rollNo: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//           </div>
//           <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold">View DMC</button>
//         </form>

//         <div className="mt-4">
//           <button onClick={() => { setUserType(''); setStudentInfo({ name: '', class: '', rollNo: '' }); setCurrentPage('dmc'); }} className="text-sm text-gray-600">Go back</button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}


// {/* STUDENT DMC DETAIL */}
// {currentPage === 'student-dmc' && selectedStudent && selectedStudent.hasDmc && (
//   <div className="container mx-auto px-4 py-12">
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-white rounded-xl shadow-lg">
//         <div ref={printRef} className="p-10">
//           <div className="text-center border-b pb-8 mb-8">
//             <div className="flex items-center justify-center space-x-3 mb-4">
//               <School className="h-12 w-12 text-blue-600" />
//               <div>
//                 <h1 className="text-3xl font-bold text-blue-600">IGPS</h1>
//                 <p className="text-gray-600">Iqra Grammar Public School</p>
//               </div>
//             </div>
//             <h2 className="text-2xl font-semibold">Detailed Marks Certificate</h2>
//             <p className="text-gray-500">Academic Year: {new Date().getFullYear() - 1}-{new Date().getFullYear()}</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             <div className="space-y-3">
//               <div>
//                 <p className="font-semibold text-gray-700">Student Name:</p>
//                 <p className="text-lg">{selectedStudent.name}</p>
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-700">Father Name:</p>
//                 <p className="text-lg">{selectedStudent.fatherName}</p>
//               </div>
//             </div>
//             <div className="space-y-3">
//               <div>
//                 <p className="font-semibold text-gray-700">Class:</p>
//                 <p className="text-lg">{(selectedStudent.className || selectedStudent.classKey || '').replace('-', ' ').toUpperCase()}</p>
//               </div>
//               <div>
//                 <p className="font-semibold textGray-700">Roll Number:</p>
//                 <p className="text-lg">{selectedStudent.rollNo}</p>
//               </div>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h3 className="text-xl font-semibold mb-4">Subject-wise Results</h3>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
//                     <th className="border border-gray-300 px-4 py-2 text-center">Obtained Marks</th>
//                     <th className="border border-gray-300 px-4 py-2 text-center">Total Marks</th>
//                     <th className="border border-gray-300 px-4 py-2 text-center">Percentage</th>
//                     <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedStudent.subjects && Object.entries(selectedStudent.subjects).map(([subject, data]) => (
//                     <tr key={subject}>
//                       <td className="border border-gray-300 px-4 py-2 font-medium">{subject}</td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">{data.obtained}</td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">{data.total}</td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">{((data.obtained / data.total) * 100).toFixed(2)}%</td>
//                       <td className="border border-gray-300 px-4 py-2 text-center font-semibold">{data.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
//             <h3 className="text-2xl font-semibold mb-6 text-center">Result Summary</h3>
//             <div className="grid md:grid-cols-3 gap-6 text-center">
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <p className="text-sm font-medium text-gray-600">Total Obtained Marks</p>
//                 <p className="text-2xl font-bold text-blue-600">{selectedStudent.totalObtained || 0}</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <p className="text-sm font-medium text-gray-600">Total Marks</p>
//                 <p className="text-2xl font-bold text-green-600">{selectedStudent.totalMarks || 0}</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <p className="text-sm font-medium text-gray-600">Percentage</p>
//                 <p className="text-2xl font-bold text-purple-600">{selectedStudent.percentage ? selectedStudent.percentage.toFixed(2) + '%' : '0%'}</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <p className="text-sm font-medium text-gray-600">Overall Grade</p>
//                 <p className="text-2xl font-bold text-orange-600">{selectedStudent.grade || 'N/A'}</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow">
//   <p className="text-sm font-medium text-gray-600">Position in Class</p>
//   <p className="text-2xl font-bold text-red-600">{selectedStudent.position || 'N/A'}</p>
// </div>
// <div className="bg-white p-4 rounded-lg shadow">
//   <p className="text-sm font-medium text-gray-600">Remarks</p>
//   <p className="text-2xl font-bold text-indigo-600">
//     {selectedStudent.percentage >= 80 ? 'Excellent' : 
//      selectedStudent.percentage >= 70 ? 'Good' : 
//      selectedStudent.percentage >= 60 ? 'Average' : 'Needs Improvement'}
//   </p>
// </div>
// </div>
// </div>

// <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8">
//   <div className="text-center">
//     <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{width: '80%'}}>
//       <p className="font-semibold">Class Teacher</p>
//     </div>
//   </div>
//   <div className="text-center">
//     <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{width: '80%'}}>
//       <p className="font-semibold">Principal</p>
//     </div>
//   </div>
//   <div className="text-center">
//     <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{width: '80%'}}>
//       <p className="font-semibold">Parent/Guardian</p>
//     </div>
//   </div>
//   </div>

//   <div className="text-center mt-8 text-sm text-gray-500">
//   <p>Generated on: {new Date().toLocaleDateString()}</p>
//   <p>© {new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
//   </div>
//   </div>

//   <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//   <div className="flex items-center gap-3">
//     <button onClick={handlePrintDmc} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print DMC</button>
//     <button onClick={handleDownloadDmc} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download DMC</button>
//   </div>

//   <button onClick={() => { setSelectedStudent(null); setCurrentPage('dmc'); setUserType(''); }} className="px-4 py-2 border rounded-lg">Back to Search</button>
//   {isAdminLoggedIn && (
//     <button onClick={() => { setDmcStudentInfo({ 
//       class: selectedStudent.className || selectedStudent.classKey, 
//       rollNo: selectedStudent.rollNo,
//       name: selectedStudent.name,
//       fatherName: selectedStudent.fatherName,
//       totalObtained: selectedStudent.totalObtained || 0,
//       totalMarks: selectedStudent.totalMarks || 0,
//       percentage: selectedStudent.percentage || 0,
//       grade: selectedStudent.grade || '',
//       position: selectedStudent.position || ''
//     }); 
//     setDmcSubjects(selectedStudent.subjects ? Object.entries(selectedStudent.subjects).map(([name, data]) => ({
//       name,
//       obtained: data.obtained.toString(),
//       total: data.total.toString(),
//       grade: data.grade
//     })) : [
//       { name: 'English', obtained: '', total: '', grade: '' },
//       { name: 'Math', obtained: '', total: '', grade: '' },
//       { name: 'Science', obtained: '', total: '', grade: '' },
//       { name: 'Urdu', obtained: '', total: '', grade: '' },
//       { name: 'Islamiat', obtained: '', total: '', grade: '' },
//       { name: 'Social Studies', obtained: '', total: '', grade: '' }
//     ]);
//     setCurrentPage('admin-dmc'); }} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Edit DMC</button>
//   )}
//   </div>
//   </div>
//   </div>
//   </div>
//   )}

//   {/* FEES - choice page */}
//   {currentPage === 'fees' && !userType && (
//   <div className="container mx-auto px-4 py-12">
//   <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fee Management</h1>
//   <div className="max-w-md mx-auto">
//     <div className="bg-white rounded-xl shadow-lg p-10">
//       <h2 className="text-2xl font-semibold mb-8 text-center">Select User Type</h2>
//       <div className="space-y-6">
//         <button onClick={() => { setUserType('student'); setCurrentPage('fees'); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center justify-center space-x-3">
//           <User className="h-6 w-6" />
//           <span className="text-lg font-semibold">Student</span>
//         </button>
//         <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text"><span className="text-lg font-semibold">Student</span>
//   </button>
//   <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 flex items-center justify-center space-x-3">
//   <Settings className="h-6 w-6" />
//   <span className="text-lg font-semibold">Administration</span>
//   </button>
//   </div>
//   </div>
//   </div>
//   </div>

//   )}

//   {/* FEES - student form */}
//   {currentPage === 'fees' && userType === 'student' && (
//   <div className="container mx-auto px-4 py-12">
//   <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Fee Information</h1>
//   <div className="max-w-md mx-auto">
//     <div className="bg-white rounded-xl shadow-lg p-10">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
//       <form onSubmit={handleStudentSearch} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
//           <input type="text" placeholder="Full Name" value={studentInfo.name} onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
//           <select value={studentInfo.class} onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none">
//             <option value="">Select Class</option>
//             {Object.keys(studentsData).map(k => (
//               <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
//           <input type="text" placeholder="Roll Number" value={studentInfo.rollNo} onChange={(e) => setStudentInfo({ ...studentInfo, rollNo: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
//         </div>
//         <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold">Check Fee Status</button>
//       </form>

//       <div className="mt-4">
//         <button onClick={() => { setUserType(''); setStudentInfo({ name: '', class: '', rollNo: '' }); setCurrentPage('fees'); }} className="text-sm text-gray-600">Go back</button>
//       </div>
//     </div>
//   </div>
//   </div>

//   )}

//   {/* STUDENT FEE DETAIL */}
//   {currentPage === 'student-fee-detail' && selectedStudent && (
//   <div className="container mx-auto px-4 py-12">
//   <div className="max-w-4xl mx-auto">
//     <div className="bg-white rounded-xl shadow-lg">
//       <div ref={printRef} className="p-10">
//         <div className="text-center border-b pb-8 mb-8">
//           <div className="flex items-center justify-center space-x-3 mb-4">
//             <School className="h-12 w-12 text-blue-600" />
//             <div>
//               <h1 className="text-3xl font-bold text-blue-600">IGPS</h1>
//               <p className="text-gray-600">Iqra Grammar Public School</p>
//             </div>
//           </div>
//           <h2 className="text-2xl font-semibold">Fee Statement</h2>
//           <p className="text-gray-500">Generated on: {new Date().toLocaleDateString()}</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="space-y-3">
//             <div>
//               <p className="font-semibold text-gray-700">Student Name:</p>
//               <p className="text-lg">{selectedStudent.name}</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-700">Father Name:</p>
//               <p className="text-lg">{selectedStudent.fatherName}</p>
//             </div>
//           </div>
//           <div className="space-y-3">
//             <div>
//               <p className="font-semibold text-gray-700">Class:</p>
//               <p className="text-lg">{(selectedStudent.className || selectedStudent.classKey || '').replace('-', ' ').toUpperCase()}</p>
//             </div>
//             <div>
//               <p className="font-semibold textGray-700">Roll Number:</p>
//               <p className="text-lg">{selectedStudent.rollNo}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
//           <h3 className="text-2xl font-semibold mb-6 text-center">Fee Details</h3>
//           <div className="grid md:grid-cols-3 gap-6 text-center">
//             <div className="bg-white p-4 rounded-lg shadow">
//               <p className="text-sm font-medium text-gray-600">Monthly Fee</p>
//               <p className="text-2xl font-bold text-blue-600">{formatCurrency(selectedStudent.monthlyFee)}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <p className="text-sm font-medium text-gray-600">Pending Fee</p>
//               <p className="text-2xl font-bold text-red-600">{formatCurrency(calculateTotalPendingForStudent(selectedStudent))}</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <p className="text-sm font-medium text-gray-600">Total Paid</p>
//               <p className="text-2xl font-bold text-green-600">{formatCurrency(selectedStudent.totalPaid)}</p>
//             </div>
//           </div>
//           <div className="text-center mt-6">
//             <p className={`text-lg font-bold ${(calculateTotalPendingForStudent(selectedStudent) || 0) > 0 ? 'text-red-600' : 'text-green-600'}`}>
//               Status: {(calculateTotalPendingForStudent(selectedStudent) || 0) > 0 ? 'Fee Pending' : 'All Fees Paid'}
//             </p>
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-4">Extra Fees</h3>
//           <div className="overflow-x-auto mb-4">
//             <table className="w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border border-gray-300 px-4 py-2 text-left">Label</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {(selectedStudent.extraFees || []).map((ef) => (
//                   <tr key={ef.id}>
//                     <td className="border border-gray-300 px-4 py-2">{ef.label}</td>
//                     <td className="border border-gray-300 px-4 py-2">{formatCurrency(ef.amount)}</td>
//                     <td className="border border-gray-300 px-4 py-2">{ef.status}</td>
//                     <td className="border border-gray-300 px-4 py-2">{ef.datePaid || '-'}</td>
//                   </tr>
//                 ))}
//                 {(selectedStudent.extraFees || []).length === 0 && (
//                   <tr><td colSpan={4} className="p-4 text-center text-gray-500">No extra fees.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <h3 className="text-xl font-semibold mb-4">Fee History</h3>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border border-gray-300 px-4 py-2 text-left">Month</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Date Paid</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Note</th>
//                 </tr>
//               </thead>
//               <tbody>
//   {(selectedStudent.feeHistory || []).map((fee, index) => (
//     <tr key={index}>
//       <td className="border border-gray-300 px-4 py-2">{fee.month}</td>
//       <td className="border border-gray-300 px-4 py-2">{formatCurrency(fee.amount)}</td>
//       <td className="border border-gray-300 px-4 py-2">{fee.status}</td>
//       <td className="border border-gray-300 px-4 py-2">{fee.date || '-'}</td>
//       <td className="border border-gray-300 px-4 py-2">{fee.note || '-'}</td>
//     </tr>
//   ))}
//   {(selectedStudent.feeHistory || []).length === 0 && (
//     <tr><td colSpan={5} className="p-4 text-center text-gray-500">No fee history yet.</td></tr>
//   )}
//   </tbody>
//   </table>
//   </div>
//   </div>
//   </div>
//   </div>

//   <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//   <div className="flex items-center gap-3">
//     <button onClick={handleOpenPrintable} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print</button>
//     <button onClick={handleDownloadHtml} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download (HTML)</button>
//   </div>

//   <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//   <div className="flex items-center gap-3">
//     <button onClick={handleOpenPrintable} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print</button>
//     <button onClick={handleDownloadHtml} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download (HTML)</button>
//   </div>

//   <div className="w-full md:w-auto">
//     <form onSubmit={handlePayment} className="flex flex-col md:flex-row items-center gap-3">
//       <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} className="p-3 border rounded-lg">
//         <option value="full">Pay Full Pending</option>
//         <option value="monthly">Pay Monthly Fee</option>
//         <option value="half">Pay Half Pending</option>
//         <option value="custom">Custom Amount</option>
//       </select>
//       {paymentType === 'custom' && (
//         <input type="number" placeholder="Enter amount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="p-3 border rounded-lg" />
//       )}
//       <button type="submit" className="bg-indigo-600 text-white px-4 py-3 rounded-lg">Process Payment</button>
//     </form>
//   </div>
//   </div>

//   </div>
//   </div>
//   </div>
//   )}

//   {/* ADMIN LOGIN */}
//   {currentPage === 'admin-login' && (
//   <div className="container mx-auto px-4 py-12 max-w-md">
//   <div className="bg-white rounded-xl shadow-lg p-8">
//     <h2 className="text-2xl font-semibold mb-6">Administration Login</h2>
//     <form onSubmit={handleAdminLogin} className="space-y-4">
//       <input value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} placeholder="Username" className="w-full p-3 border rounded-lg" />
//       <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="Password" className="w-full p-3 border rounded-lg" />
//       <div className="flex items-center justify-between">
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</button>
//         <button type="button" onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="text-sm text-gray-600">Back</button>
//       </div>
//     </form>
//   </div>
//   </div>
//   )}

//   {/* ADMIN DASHBOARD */}
//   {isAdminLoggedIn && currentPage === 'admin-dashboard' && (
//   <div className="container mx-auto px-4 py-12">
//   <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//   {/* Teacher Management Section */}
//   <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//     <h3 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">Teacher Management</h3>

//     <div className="grid md:grid-cols-2 gap-8 mb-8">
//       <div className="bg-blue-50 p-6 rounded-lg">
//         <h4 className="text-xl font-semibold mb-4 flex items-center">
//           <UserPlus className="h-6 w-6 mr-2" />
//           Add New Teacher
//         </h4>
//         <div className="space-y-4">
//           <div className="grid md:grid-cols-2 gap-4">
//             <input value={newTeacher.name} onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })} placeholder="Full Name" className="w-full p-3 border rounded-lg" />
//             <input value={newTeacher.fatherName} onChange={(e) => setNewTeacher({ ...newTeacher, fatherName: e.target.value })} placeholder="Father's Name" className="w-full p-3 border rounded-lg" />
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input value={newTeacher.cnic} onChange={(e) => setNewTeacher({ ...newTeacher, cnic: e.target.value })} placeholder="CNIC" className="w-full p-3 border rounded-lg" />
//             <input value={newTeacher.phone} onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })} placeholder="Phone" className="w-full p-3 border rounded-lg" />
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input value={newTeacher.salary} onChange={(e) => setNewTeacher({ ...newTeacher, salary: e.target.value })} placeholder="Salary" className="w-full p-3 border rounded-lg" />
//             <input value={newTeacher.section} onChange={(e) => setNewTeacher({ ...newTeacher, section: e.target.value })} placeholder="Subject/Department" className="w-full p-3 border rounded-lg" />
//           </div>
//           <div>
//             <input value={newTeacher.qualification} onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })} placeholder="Qualifications" className="w-full p-3 border rounded-lg" />
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input value={newTeacher.experience} onChange={(e) => setNewTeacher({ ...newTeacher, experience: e.target.value })} placeholder="Experience (years)" className="w-full p-3 border rounded-lg" />
//             <input type="date" value={newTeacher.joinDate} onChange={(e) => setNewTeacher({ ...newTeacher, joinDate: e.target.value })} placeholder="Join Date" className="w-full p-3 border rounded-lg" />
//           </div>
//           <button onClick={addTeacher} className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full">
//             <UserPlus className="h-5 w-5 mr-2" />
//             Add Teacher
//           </button>
//         </div>
//       </div>

//       <div>
//         <h4 className="text-xl font-semibold mb-4 flex items-center">
//           <Users className="h-6 w-6 mr-2" />
//           Teaching Staff ({teachersData.length})
//         </h4>
//         <div className="overflow-x-auto max-h-96 bg-white rounded-lg shadow">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Subject</th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Salary</th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {teachersData.map(teacher => (
//                 <tr key={teacher.id} className="hover:bg-gray-50">
//                   <td className="p-3">
//                     <div>
//                       <div className="font-medium">{teacher.name}</div>
//                       <div className="text-sm text-gray-500">{teacher.qualification}</div>
//                     </div>
//                   </td>
//                   <td className="p-3">{teacher.section}</td>
//                   <td className="p-3">{formatCurrency(teacher.salary)}</td>
//                   <td className="p-3">
//                     <div className="flex space-x-2">
//                       <button onClick={() => viewTeacherDetails(teacher)} className="p-1 text-blue-600 hover:text-blue-800">
//                         <Eye className="h-4 w-4" />
//                       </button>
//                       <button onClick={() => deleteTeacher(teacher.id)} className="p-1 text-red-600 hover:text-red-800">
//                         <Trash2 className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//               {teachersData.length === 0 && (
//                 <tr><td colSpan={4} className="p-4 text-center text-gray-500">No teachers added yet.</td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>

//     {/* Teacher Statistics */}
//     <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
//       <h4 className="text-xl font-semibold mb-4">Teacher Statistics</h4>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="text-center">
//           <div className="text-3xl font-bold">{teachersData.length}</div>
//           <div className="text-sm">Total Teachers</div>
//         </div>
//         <div className="text-center">
//           <div className="text-3xl font-bold">
//             {teachersData.reduce((acc, teacher) => acc + teacher.salary, 0).toLocaleString()}
//           </div>
//           <div className="text-sm">Total Salary Expense</div>
//         </div>
//         <div className="text-center">
//           <div className="text-3xl font-bold">
//             {teachersData.length ? Math.round(teachersData.reduce((acc, teacher) => acc + teacher.salary, 0) / teachersData.length) : 0}
//           </div>
//           <div className="text-sm">Average Salary</div>
//         </div>
//         <div className="text-center">
//           <div className="text-3xl font-bold">
//             {new Set(teachersData.map(t => t.section)).size}
//           </div>
//           <div className="text-sm">Departments</div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="grid md:grid-cols-2 gap-8">
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <h3 className="text-xl font-semibold mb-4">Add New Class</h3>
//       <div className="flex gap-2">
//         <input value={newClassName} onChange={(e) => setNewClassName(e.target.value)} placeholder="class-4 or class-5 (key)" className="flex-1 p-3 border rounded-lg" />
//         <button onClick={addClass} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
//       </div>

//       <div className="mt-6">
//         <h4 className="font-semibold mb-2">Apply Global Extra Fee</h4>
//         <div className="flex gap-2 items-center mb-2">
//           <input value={globalExtraLabel} onChange={(e) => setGlobalExtraLabel(e.target.value)} placeholder="Label (e.g. Exam Fee)" className="p-2 border rounded flex-1" />
//           <input value={globalExtraAmount} onChange={(e) => setGlobalExtraAmount(e.target.value)} placeholder="Amount" type="number" className="p-2 border rounded w-28" />
//           <button onClick={applyGlobalExtraToSelectedClasses} className="bg-purple-600 text-white px-3 py-2 rounded">Apply to Selected</button>
//         </div>

//         <div className="mb-2">
//           <div className="flex gap-2 mb-2">
//             <button onClick={selectAllClasses} className="text-sm bg-gray-200 px-2 py-1 rounded">Select All</button>
//             <button onClick={deselectAllClasses} className="text-sm bg-gray-200 px-2 py-1 rounded">Deselect All</button>
//           </div>

//           <div className="max-h-40 overflow-y-auto border p-2 rounded">
//             {Object.keys(studentsData).map(k => (
//               <div key={k} className="flex items-center mb-1">
//                 <input
//                   type="checkbox"
//                   checked={selectedClasses.includes(k)}
//                   onChange={() => toggleClassSelection(k)}
//                   className="mr-2"
//                 />
//                 <span>{k.replace('-', ' ').toUpperCase()}</span>
//               </div>
//             ))}
//             {Object.keys(studentsData).length === 0 && (
//               <div className="text-sm text-gray-500">No classes available</div>
//             )}
//           </div>
//         </div>

//         <h4 className="font-semibold mt-4 mb-2">Existing Global Fees</h4>
//         <div className="space-y-2 max-h-40 overflow-y-auto">
// {globalFees.length === 0 && (
// <div className="text-sm text-gray-500 p-2">No global fees added yet.</div>
// )}
// </div>
// </div>

// <div className="mt-6">
// <h4 className="font-semibold mb-2">Existing Classes</h4>
// <ul className="space-y-2">
// {Object.keys(studentsData).map(k => (
// <li key={k} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
// <div className="flex items-center gap-2">
// <button onClick={() => handlePrintClass(k)} className="text-left text-blue-600 hover:underline font-medium">{k.replace('-', ' ').toUpperCase()}</button>
// <span className="text-sm text-gray-600">({studentsData[k].length})</span>
// </div>
// <div className="flex gap-2">
// <button onClick={() => {
// // quick add demo student modal-less
// setNewStudent({ name: `Student ${studentsData[k].length + 1}`, rollNo: `${studentsData[k].length + 1}`, fatherName: 'Father Name', monthlyFee: '3000', classKey: k });
// addStudent();
// }} className="px-2 py-1 bg-green-600 text-white rounded text-sm flex items-center gap-1"><Plus className="h-4 w-4" />Add</button>
// <button onClick={() => {
// // print class quick button as well
// handlePrintClass(k);
// }} className="px-2 py-1 bg-gray-700 text-white rounded text-sm flex items-center gap-1"><Printer className="h-4 w-4" />Print</button>
// </div>
// </li>
// ))}
// {Object.keys(studentsData).length === 0 && <li className="text-sm text-gray-500 p-2">No classes yet. Add a class to begin.</li>}
// </ul>
// </div>
// </div>

// <div className="bg-white rounded-xl shadow-lg p-6">
// <h3 className="text-xl font-semibold mb-4">Add Student to Class</h3>
// <div className="space-y-3">
// <input value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} placeholder="Student Full Name" className="w-full p-3 border rounded-lg" />
// <input value={newStudent.rollNo} onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })} placeholder="Roll No" className="w-full p-3 border rounded-lg" />
// <input value={newStudent.fatherName} onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
// <input value={newStudent.monthlyFee} onChange={(e) => setNewStudent({ ...newStudent, monthlyFee: e.target.value })} placeholder="Monthly Fee" className="w-full p-3 border rounded-lg" />
// <select value={newStudent.classKey} onChange={(e) => setNewStudent({ ...newStudent, classKey: e.target.value })} className="w-full p-3 border rounded-lg">
// <option value="">Select Class</option>
// {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
// </select>
// <div className="flex gap-2">
// <button onClick={addStudent} className="bg-green-600 text-white px-4 py-2 rounded-lg">Add Student</button>
// <button onClick={() => { setNewStudent({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' }); }} className="px-4 py-2 border rounded-lg">Clear</button>
// </div>
// </div>

// {/* DMC Management Section */}
// <div className="mt-6">
// <h4 className="text-xl font-semibold mb-4">DMC Management</h4>
// <div className="space-y-3">
// <select value={dmcStudentInfo.class} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, class: e.target.value })} className="w-full p-3 border rounded-lg">
// <option value="">Select Class for DMC</option>
// {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
// </select>
// <input value={dmcStudentInfo.rollNo} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />
// <button onClick={() => { setCurrentPage('admin-dmc'); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Manage DMC</button>
// </div>
// </div>
// </div>

// <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
// <h3 className="text-xl font-semibold mb-4">All Students Overview</h3>

// {/* editing panel */}
// {editingStudent && (
// <div className="bg-yellow-50 p-4 mb-4 rounded">
// <h4 className="font-semibold mb-2">Edit Student</h4>
// <div className="grid md:grid-cols-2 gap-2">
// <input value={editingStudent.name} onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })} className="p-2 border rounded" />
// <input value={editingStudent.fatherName} onChange={(e) => setEditingStudent({ ...editingStudent, fatherName: e.target.value })} className="p-2 border rounded" />
// <input value={editingStudent.rollNo} onChange={(e) => setEditingStudent({ ...editingStudent, rollNo: e.target.value })} className="p-2 border rounded" />
// <input type="number" value={editingStudent.monthlyFee || 0} onChange={(e) => setEditingStudent({ ...editingStudent, monthlyFee: e.target.value })} className="p-2 border rounded" />
// <input type="number" value={editingStudent.pendingFee || 0} onChange={(e) => setEditingStudent({ ...editingStudent, pendingFee: e.target.value })} className="p-2 border rounded" />
// <input type="number" value={editingStudent.totalPaid || 0} onChange={(e) => setEditingStudent({ ...editingStudent, totalPaid: e.target.value })} className="p-2 border rounded" />
// </div>

// <div className="mt-3">
// <h5 className="font-medium mb-2">Extra Fees for this Student</h5>
// <div className="space-y-2">
// {(editingStudent.extraFees || []).map(ef => (
// <div key={ef.id} className="flex items-center justify-between bg-white p-2 rounded border">
// <div>
// <div className="font-semibold">{ef.label}</div>
// <div className="text-sm text-gray-600">{formatCurrency(ef.amount)} • {ef.status}</div>
// </div>
// <div className="flex gap-2">
// {ef.status === 'pending' && <button onClick={() => removeExtraFromStudent(editingStudent.classKey, editingStudent.id, ef.id)} className="px-2 py-1 border rounded text-sm">Remove</button>}
// </div>
// </div>
// ))}
// {(editingStudent.extraFees || []).length === 0 && <div className="text-sm text-gray-500">No extra fees</div>}
// </div>

// <div className="mt-3 flex gap-2 items-center">
// <input value={editExtraLabel} onChange={(e) => setEditExtraLabel(e.target.value)} placeholder="Extra label" className="p-2 border rounded flex-1" />
// <input value={editExtraAmount} onChange={(e) => setEditExtraAmount(e.target.value)} placeholder="Amount" type="number" className="p-2 border rounded w-28" />
// <button onClick={addExtraToEditingStudent} className="px-3 py-2 bg-indigo-600 text-white rounded">Add Extra</button>
// </div>
// </div>

// <div className="mt-3 flex gap-2">
// <button onClick={saveEditedStudent} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
// <button onClick={() => setEditingStudent(null)} className="px-3 py-1 border rounded">Cancel</button>
// </div>
// </div>
// )}

// <div className="overflow-x-auto">
// <table className="w-full border-collapse border border-gray-200">
// <thead>
// <tr className="bg-gray-50">
// <th className="p-2 border">ID</th>
// <th className="p-2 border">Name</th>
// <th className="p-2 border">Father</th>
// <th className="p-2 border">Class</th>
// <th className="p-2 border">Roll</th>
// <th className="p-2 border">Monthly</th>
// <th className="p-2 border">Pending</th>
// <th className="p-2 border">Actions</th>
// </tr>
// </thead>
// <tbody>
// {getAllStudents().map(s => (
// <tr key={s.id} className="hover:bg-gray-50">
// <td className="p-2 border">{s.id}</td>
// <td className="p-2 border">{s.name}</td>
// <td className="p-2 border">{s.fatherName}</td>
// <td className="p-2 border">{(s.classKey || s.className).replace('-', ' ').toUpperCase()}</td>
// <td className="p-2 border">{s.rollNo}</td>
// <td className="p-2 border">{formatCurrency(s.monthlyFee)}</td>
// <td className="p-2 border">{formatCurrency(calculateTotalPendingForStudent(s))}</td>
// <td className="p-2 border">
// <div className="flex gap-2">
// <button onClick={() => { setSelectedStudent({ ...s, className: s.classKey }); setCurrentPage('student-fee-detail'); }} className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
// <button onClick={() => setEditingStudent({ ...s, classKey: s.classKey })} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
// <button onClick={() => deleteStudent(s.classKey, s.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
// </div>
// </td>
// </tr>
// ))}
// {getAllStudents().length === 0 && (
// <tr><td colSpan={8} className="p-4 text-center text-gray-500">No students yet — add students from the panel above.</td></tr>
// )}
// </tbody>
// </table>
// </div>
// </div>

// </div>
// </div>
// )}

// {/* ADMIN DMC MANAGEMENT */}
// {isAdminLoggedIn && currentPage === 'admin-dmc' && (
// <div className="container mx-auto px-4 py-12">
// <h2 className="text-2xl font-semibold mb-4">DMC Management</h2>

// <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// <div className="grid md:grid-cols-2 gap-6">
// <div>
// <h3 className="text-xl font-semibold mb-4">Add/Edit DMC</h3>

// <div className="space-y-3 mb-4">
//   <select value={dmcStudentInfo.class} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, class: e.target.value })} className="w-full p-3 border rounded-lg">
//     <option value="">Select Class</option>
//     {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
//   </select>

//   <input value={dmcStudentInfo.rollNo} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />

//   <button onClick={() => {
//     // Find student to pre-fill name and father name
//     if (dmcStudentInfo.class && dmcStudentInfo.rollNo) {
//       const student = (studentsData[dmcStudentInfo.class] || []).find(s => s.rollNo === dmcStudentInfo.rollNo);
//       if (student) {
//         setDmcStudentInfo(prev => ({
//           ...prev,
//           name: student.name,
//           fatherName: student.fatherName
//         }));
//       }
//     }
//   }} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Load Student Info</button>
// </div>

// {dmcStudentInfo.name && (
//   <div className="bg-gray-50 p-4 rounded-lg mb-4">
//     <p><strong>Student:</strong> {dmcStudentInfo.name}</p>
//     <p><strong>Father:</strong> {dmcStudentInfo.fatherName}</p>
//   </div>
// )}

// <div className="space-y-3">
//   <input value={dmcStudentInfo.totalObtained} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, totalObtained: parseInt(e.target.value) || 0 })} placeholder="Total Obtained Marks" className="w-full p-3 border rounded-lg" />
//   <input value={dmcStudentInfo.totalMarks} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, totalMarks: parseInt(e.target.value) || 0 })} placeholder="Total Marks" className="w-full p-3 border rounded-lg" />
//   <input value={dmcStudentInfo.percentage} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, percentage: parseFloat(e.target.value) || 0 })} placeholder="Percentage" className="w-full p-3 border rounded-lg" />
//   <input value={dmcStudentInfo.grade} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, grade: e.target.value })} placeholder="Grade"></input>
//   <input
//     value={dmcStudentInfo.position}
//     onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, position: e.target.value })}
//     placeholder="Position in class"
//     className="w-full p-3 border rounded-lg"
//   />

//   <button onClick={addDmc} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Save DMC</button>
// </div>

// <h4 className="font-semibold mt-6 mb-3">Subjects</h4>
// <div className="space-y-3 max-h-60 overflow-y-auto">
//   {dmcSubjects.map((subject, index) => (
//     <div key={index} className="bg-gray-50 p-3 rounded-lg">
//       <div className="flex items-center justify-between mb-2">
//         <input
//           value={subject.name}
//           onChange={(e) => updateDmcSubject(index, 'name', e.target.value)}
//           placeholder="Subject Name"
//           className="flex-1 p-2 border rounded mr-2"
//         />
//         <button onClick={() => removeSubject(index)} className="p-2 bg-red-500 text-white rounded">
//           <X className="h-4 w-4" />
//         </button>
//       </div>
//       <div className="grid grid-cols-3 gap-2">
//         <input
//           value={subject.obtained}
//           onChange={(e) => updateDmcSubject(index, 'obtained', e.target.value)}
//           placeholder="Obtained"
//           type="number"
//           className="p-2 border rounded"
//         />
//         <input
//           value={subject.total}
//           onChange={(e) => updateDmcSubject(index, 'total', e.target.value)}
//           placeholder="Total"
//           type="number"
//           className="p-2 border rounded"
//         />
//         <input
//           value={subject.grade}
//           onChange={(e) => updateDmcSubject(index, 'grade', e.target.value)}
//           placeholder="Grade"
//           className="p-2 border rounded"
//         />
//       </div>
//     </div>
//   ))}
//   <button onClick={addNewSubject} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center">
//     <Plus className="h-4 w-4 mr-1" /> Add Subject
//   </button>
// </div>
// </div>

// <div>
// <h3 className="text-xl font-semibold mb-4">Existing DMCs</h3>

// <div className="overflow-x-auto max-h-96">
//   <table className="w-full border-collapse border border-gray-200">
//     <thead>
//       <tr className="bg-gray-50">
//         <th className="p-2 border">Class</th>
//         <th className="p-2 border">Roll No</th>
//         <th className="p-2 border">Name</th>
//         <th className="p-2 border">Percentage</th>
//         <th className="p-2 border">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {Object.entries(resultsData).map(([className, classResults]) => 
//         Object.entries(classResults).map(([rollNo, result]) => (
//           <tr key={`${className}-${rollNo}`} className="hover:bg-gray-50">
//             <td className="p-2 border">{className.replace('-', ' ').toUpperCase()}</td>
//             <td className="p-2 border">{rollNo}</td>
//             <td className="p-2 border">{result.name}</td>
//             <td className="p-2 border">{result.percentage}%</td>
//             <td className="p-2 border">
//               <button onClick={() => {
//                 setDmcStudentInfo({
//                   class: className,
//                   rollNo: rollNo,
//                   name: result.name,
//                   fatherName: result.fatherName,
//                   totalObtained: result.totalObtained || 0,
//                   totalMarks: result.totalMarks || 0,
//                   percentage: result.percentage || 0,
//                   grade: result.grade || '',
//                   position: result.position || ''
//                 });
//                 setDmcSubjects(result.subjects ? Object.entries(result.subjects).map(([name, data]) => ({
//                   name,
//                   obtained: data.obtained.toString(),
//                   total: data.total.toString(),
//                   grade: data.grade
//                 })) : [
//                   { name: 'English', obtained: '', total: '', grade: '' },
//                   { name: 'Math', obtained: '', total: '', grade: '' },
//                   { name: 'Science', obtained: '', total: '', grade: '' },
//                   { name: 'Urdu', obtained: '', total: '', grade: '' },
//                   { name: 'Islamiat', obtained: '', total: '', grade: '' },
//                   { name: 'Social Studies', obtained: '', total: '', grade: '' }
//                 ]);
//               }} className="px-2 py-1 bg-blue-600 text-white rounded text-sm mr-1">Edit</button>
//               <button onClick={() => deleteDmc(className, rollNo)} className="px-2 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
//             </td>
//           </tr>
//         ))
//       )}
//       {Object.keys(resultsData).length === 0 && (
//         <tr><td colSpan={5} className="p-4 text-center text-gray-500">No DMCs added yet.</td></tr>
//       )}
//     </tbody>
//   </table>
// </div>
// </div>
// </div>

// <div className="mt-6">
// <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
// </div>
// </div>
// </div>
// )}

// {/* ADMIN SEARCH */}
// {isAdminLoggedIn && currentPage === 'admin-search' && (
// <div className="container mx-auto px-4 py-12">
// <h2 className="text-2xl font-semibold mb-4">Search Students</h2>
// <div className="bg-white rounded-xl shadow-lg p-6">
// <div className="flex gap-2 mb-4">
// <input
//   value={searchTerm}
//   onChange={(e) => setSearchTerm(e.target.value)}
//   placeholder="Search by name, father, roll or class"
//   className="flex-1 p-3 border rounded-lg"
// />
// <button
//   onClick={() => setSearchTerm('')}
//   className="px-4 py-2 border rounded-lg"
// >
//   Clear
// </button>
// </div>

// <div className="overflow-x-auto">
// <table className="w-full border-collapse border border-gray-200">
//   <thead>
//     <tr className="bg-gray-50">
//       <th className="p-2 border">Name</th>
//       <th className="p-2 border">Father</th>
//       <th className="p-2 border">Class</th>
//       <th className="p-2 border">Roll</th>
//       <th className="p-2 border">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     {(() => {
//       const students = getFilteredStudents();
//       return (
//         <>
//           {students.map((s) => (
//             <tr key={s.id} className="hover:bg-gray-50">
//               <td className="p-2 border">{s.name}</td>
//               <td className="p-2 border">{s.fatherName}</td>
//               <td className="p-2 border">
//                 {(s.classKey || s.className || "")
//                   .replace("-", " ")
//                   .toUpperCase()}
//               </td>
//               <td className="p-2 border">{s.rollNo}</td>
//               <td className="p-2 border">
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setSelectedStudent(s);
//                       setCurrentPage("student-fee-detail");
//                     }}
//                     className="px-3 py-1 bg-blue-600 text-white rounded"
//                   >
//                     View
//                   </button>
//                   <button
//                     onClick={() => {
//                       const st = { ...s, classKey: s.classKey };
//                       const html = buildPrintableHtml([st]);
//                       openPrintWindow(html);
//                     }}
//                     className="px-3 py-1 bg-green-600 text-white rounded"
//                   >
//                     Print
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//           {students.length === 0 && (
//             <tr>
//               <td
//                 colSpan={5}
//                 className="p-4 text-center text-gray-500"
//               >
//                 No students match the search.
//               </td>
//             </tr>
//           )}
//         </>
//       );
//     })()}
//   </tbody>
// </table>
// </div>
// </div>
// </div>
// )}

// {/* ADMIN STUDENT PROFILES */}
// {/* {isAdminLoggedIn && currentPage === 'admin-student-profiles' && (
// <div className="container mx-auto px-4 py-12">
// <h2 className="text-2xl font-semibold mb-4">Student Profiles</h2>

// <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
// <div className="grid md:grid-cols-2 gap-6">
// <div>
// <h3 className="text-xl font-semibold mb-4">Add New Student Profile</h3>

// <div className="space-y-3">
//   <input value={newStudentProfile.name} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, name: e.target.value })} placeholder="Student Name" className="w-full p-3 border rounded-lg" />
//   <input value={newStudentProfile.fatherName} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
//   <input value={newStudentProfile.class} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, class: e.target.value })} placeholder="Class" className="w-full p-3 border rounded-lg" />
//   <input value={newStudentProfile.rollNo} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />
//   <input value={newStudentProfile.phone} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, phone: e.target.value })} placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
//   <input type="date" value={newStudentProfile.birthDate} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, birthDate: e.target.value })} placeholder="Birth Date" className="w-full p-3 border rounded-lg" />

//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-2">Student Photo</label>
//     <input 
//       type="file" 
//       accept="image/*" 
//       onChange={(e) => setNewStudentProfile({ ...newStudentProfile, photo: e.target.files[0] })} 
//       className="w-full p-3 border rounded-lg" 
//     />
//   </div>

//   <button onClick={addStudentProfile} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Add Profile</button>
// </div>
// </div>

// <div>
// <h3 className="text-xl font-semibold mb-4">Existing Student Profiles ({studentProfiles.length})</h3>

// <div className="overflow-x-auto max-h-96">
//   <table className="w-full border-collapse">
//     <thead className="bg-gray-50">
//       <tr>
//         <th className="p-3 text-left text-sm font-semibold text-gray-700">Photo</th>
//         <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
//         <th className="p-3 text-left text-sm font-semibold text-gray-700">Class</th>
//         <th className="p-3 text-left text-sm font-semibold text-gray-700">Roll No</th>
//         <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//       {studentProfiles.map(profile => (
//         <tr key={profile.id} className="hover:bg-gray-50">
//           <td className="p-3">
//             {profile.photo ? (
//               <img src={profile.photo} alt={profile.name} className="h-12 w-12 rounded-full object-cover" />
//             ) : (
//               <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
//                 <User className="h-6 w-6 text-gray-400" />
//               </div>
//             )}
//           </td>
//           <td className="p-3">
//             <div>
//               <div className="font-medium">{profile.name}</div>
//               <div className="text-sm text-gray-500">{profile.fatherName}</div>
//             </div>
//           </td>
//           <td className="p-3">{profile.class}</td>
//           <td className="p-3">{profile.rollNo}</td>
//           <td className="p-3">
//             <div className="flex space-x-2">
//               <button onClick={() => viewStudentProfile(profile)} className="p-1 text-blue-600 hover:text-blue-800">
//                 <Eye className="h-4 w-4" />
//               </button>
//               <button onClick={() => deleteStudentProfile(profile.id)} className="p-1 text-red-600 hover:text-red-800">
//                 <Trash2 className="h-4 w-4" />
//               </button>
//             </div>
//           </td>
//         </tr>
//       ))}
//       {studentProfiles.length === 0 && (
//         <tr><td colSpan={5} className="p-4 text-center text-gray-500">No student profiles added yet.</td></tr>
//       )}
//     </tbody>
//   </table>
// </div>
// </div>
// </div>

// <div className="mt-6">
// <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
// </div>
// </div>
// </div>
// )} */}

// {isAdminLoggedIn && currentPage === 'admin-student-profiles' && (
//   <div className="container mx-auto px-4 py-12">
//     <h2 className="text-2xl font-semibold mb-4">Student Profiles</h2>

//     <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//       <div className="grid md:grid-cols-2 gap-6">

//         {/* Add / Edit Form */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">
//             {editingProfileId ? "Edit Student Profile" : "Add New Student Profile"}
//           </h3>

//           <div className="space-y-3">
//             <input value={newStudentProfile.name} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, name: e.target.value })} placeholder="Student Name" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.fatherName} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.class} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, class: e.target.value })} placeholder="Class" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.rollNo} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />
//             <input value={newStudentProfile.phone} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, phone: e.target.value })} placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
//             <input type="date" value={newStudentProfile.birthDate} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, birthDate: e.target.value })} placeholder="Birth Date" className="w-full p-3 border rounded-lg" />

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Student Photo</label>
//               <input 
//                 type="file" 
//                 accept="image/*" 
//                 onChange={(e) => setNewStudentProfile({ ...newStudentProfile, photo: e.target.files[0] })} 
//                 className="w-full p-3 border rounded-lg" 
//               />
//             </div>

//             {editingProfileId ? (
//               <button onClick={updateStudentProfile} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Update Profile</button>
//             ) : (
//               <button onClick={addStudentProfile} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Add Profile</button>
//             )}
//           </div>
//         </div>

//         {/* Existing Profiles */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Existing Student Profiles ({studentProfiles.length})</h3>

//           <div className="overflow-x-auto max-h-96">
//             <table className="w-full border-collapse">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Photo</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Class</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Roll No</th>
//                   <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {studentProfiles.map(profile => (
//                   <tr key={profile.id} className="hover:bg-gray-50">
//                     <td className="p-3">
//                       {profile.photo ? (
//                         <img src={profile.photo} alt={profile.name} className="h-12 w-12 rounded-full object-cover" />
//                       ) : (
//                         <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
//                           <User className="h-6 w-6 text-gray-400" />
//                         </div>
//                       )}
//                     </td>
//                     <td className="p-3">
//                       <div>
//                         <div className="font-medium">{profile.name}</div>
//                         <div className="text-sm text-gray-500">{profile.fatherName}</div>
//                       </div>
//                     </td>
//                     <td className="p-3">{profile.class}</td>
//                     <td className="p-3">{profile.rollNo}</td>
//                     <td className="p-3">
//                       <div className="flex space-x-2">
//                         <button onClick={() => viewStudentProfile(profile)} className="p-1 text-blue-600 hover:text-blue-800">
//                           <Eye className="h-4 w-4" />
//                         </button>
//                         <button onClick={() => startEditingProfile(profile)} className="p-1 text-yellow-600 hover:text-yellow-800">
//                           <Pencil className="h-4 w-4" />
//                         </button>
//                         <button onClick={() => deleteStudentProfile(profile.id)} className="p-1 text-red-600 hover:text-red-800">
//                           <Trash2 className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {studentProfiles.length === 0 && (
//                   <tr><td colSpan={5} className="p-4 text-center text-gray-500">No student profiles added yet.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6">
//         <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
//       </div>
//     </div>
//   </div>
// )}


// {/* STUDENT PROFILE DETAIL */}
// {currentPage === 'student-profile-detail' && selectedStudent && (
// <div className="container mx-auto px-4 py-8">
// <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
// <div className="flex justify-between items-start">
// <div>
// <h1 className="text-3xl font-bold">{selectedStudent.name}</h1>
// <p className="text-blue-100">Class: {selectedStudent.class} | Roll No: {selectedStudent.rollNo}</p>
// </div>
// <button onClick={() => setCurrentPage('admin-student-profiles')} className="bg-white text-blue-600 px-4 py-2 rounded-lg">
// Back to Profiles
// </button>
// </div>
// </div>

// <div className="p-6">
// <div className="grid md:grid-cols-3 gap-8 mb-8">
// <div className="md:col-span-1">
// <div className="bg-gray-50 p-6 rounded-lg text-center">
// {selectedStudent.photo ? (
// <img src={selectedStudent.photo} alt={selectedStudent.name} className="h-48 w-48 rounded-full object-cover mx-auto mb-4" />
// ) : (
// <div className="h-48 w-48 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
// <Camera className="h-16 w-16 text-gray-400" />
// </div>
// )}
// <h3 className="text-xl font-semibold">{selectedStudent.name}</h3>
// <p className="text-gray-600">{selectedStudent.class} - {selectedStudent.rollNo}</p>
// </div>
// </div>

// <div className="md:col-span-2">
// <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
// <div className="space-y-4">
// <div className="grid md:grid-cols-2 gap-4">
// <div>
// <p className="font-semibold text-gray-700">Father's Name:</p>
// <p className="text-lg">{selectedStudent.fatherName}</p>
// </div>
// <div>
// <p className="font-semibold text-gray-700">Phone Number:</p>
// <p className="text-lg">{selectedStudent.phone || 'Not provided'}</p>
// </div>
// </div>
// <div>
// <p className="font-semibold text-gray-700">Date of Birth:</p>
// <p className="text-lg">{selectedStudent.birthDate || 'Not provided'}</p>
// </div>
// </div>

// <div className="mt-6">
// <h3 className="text-xl font-semibold mb-4 text-gray-700">Academic Information</h3>
// <div className="grid md:grid-cols-2 gap-4">
// <div>
// <p className="font-semibold text-gray-700">Class:</p>
// <p className="text-lg">{selectedStudent.class}</p>
// </div>
// <div>
// <p className="font-semibold text-gray-700">Roll Number:</p>
// <p className="text-lg">{selectedStudent.rollNo}</p>
// </div>
// </div>
// </div>
// </div>
// </div>

// <div className="bg-gray-50 p-6 rounded-lg">
// <h3 className="text-xl font-semibold mb-4 text-gray-700">Contact Information</h3>
// <div className="space-y-3">
// <div className="flex items-center">
// <Phone className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Phone:</span>
// <span className="ml-2">{selectedStudent.phone || 'Not provided'}</span>
// </div>
// <div className="flex items-center">
// <Calendar className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Date of Birth:</span>
// <span className="ml-2">{selectedStudent.birthDate || 'Not provided'}</span>
// </div>
// </div>
// </div>
// </div>

// <div className="bg-gray-50 p-6 border-t">
// <div className="flex flex-wrap gap-4">
// <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
// <Printer className="h-4 w-4 mr-2" />
// Print Profile
// </button>
// <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
// <Download className="h-4 w-4 mr-2" />
// Download Profile
// </button>
// </div>
// </div>
// </div>
// </div>
// )}

// {/* TEACHER DETAILS */}
// {isAdminLoggedIn && currentPage === 'teacher-details' && selectedTeacher && (
// <div className="container mx-auto px-4 py-8">
// <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
// <div className="flex justify-between items-start">
// <div>
// <h1 className="text-3xl font-bold">{selectedTeacher.name}</h1>
// <p className="text-blue-100">{selectedTeacher.section} Department</p>
// </div>
// <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-white text-blue-600 px-4 py-2 rounded-lg">
// Back to Dashboard
// </button>
// </div>
// </div>

// <div className="p-6">
// <div className="grid md:grid-cols-2 gap-8 mb-8">
// <div>
// <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
// <div className="space-y-3">
// <div className="flex items-center">
// <User className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Father's Name:</span>
// <span className="ml-2">{selectedTeacher.fatherName}</span>
// </div>
// <div className="flex items-center">
// <Shield className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">CNIC:</span>
// <span className="ml-2">{selectedTeacher.cnic}</span>
// </div>
// <div className="flex items-center">
// <Phone className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Phone:</span>
// <span className="ml-2">{selectedTeacher.phone}</span>
// </div>
// <div className="flex items-center">
// <Book className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Qualifications:</span>
// <span className="ml-2">{selectedTeacher.qualification || 'Not specified'}</span>
// </div>
// </div>
// </div>

// <div>
// <h3 className="text-xl font-semibold mb-4 text-gray-700">Employment Details</h3>
// <div className="space-y-3">
// <div className="flex items-center">
// <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Salary:</span>
// <span className="ml-2">{formatCurrency(selectedTeacher.salary)}</span>
// </div>
// <div className="flex items-center">
// <Calendar className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Join Date:</span>
// <span className="ml-2">{selectedTeacher.joinDate || 'Not specified'}</span>
// </div>
// <div className="flex items-center">
// <Star className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Experience:</span>
// <span className="ml-2">{selectedTeacher.experience || 'Not specified'} years</span>
// </div>
// <div className="flex items-center">
// <Award className="h-5 w-5 text-gray-500 mr-3" />
// <span className="font-medium">Status:</span>
// <span className="ml-2 text-green-600 font-medium">Active</span>
// </div>
// </div>
// </div>
// </div>

// <div className="border-t pt-6">
// <h3 className="text-xl font-semibold mb-4 text-gray-700">Classes Assigned</h3>
// <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// {Object.keys(studentsData).slice(0, 4).map(classKey => (
// <div key={classKey} className="bg-blue-50 p-4 rounded-lg text-center">
// <div className="text-lg font-semibold">{classKey.replace('-', ' ').toUpperCase()}</div>
// <div className="text-sm text-gray-600">{studentsData[classKey].length} students</div>
// </div>
// ))}
// {Object.keys(studentsData).length > 4 && (
// <div className="bg-gray-100 p-4 rounded-lg text-center">
// <div className="text-lg font-semib">+{Object.keys(studentsData).length - 4} more</div>
// <div className="text-sm text-gray-600">Classes</div>
// </div>
// )}
// </div>
// </div>
// </div>

// <div className="bg-gray-50 p-6 border-t">
// <div className="flex flex-wrap gap-4">
// <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
// <Printer className="h-4 w-4 mr-2" />
// Print Profile
// </button>
// <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
// <Mail className="h-4 w-4 mr-2" />
// Send Message
// </button>
// <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
// Edit Information
// </button>
// </div>
// </div>
// </div>
// </div>
// )}

// {/* LEAVING CERTIFICATE PAGE */}
// {currentPage === 'leaving-certificate' && (
// <div className="container mx-auto px-4 py-8">
// <div className="bg-white rounded-xl shadow-lg p-8">
// <h1 className="text-3xl font-bold text-center mb-8">Leaving Certificate</h1>

// <div className="max-w-4xl mx-auto">
// <div ref={printRef} className="p-8 border-2 border-dashed border-gray-300">
// <div className="text-center mb-8">
// <h2 className="text-2xl font-bold">IQRA GRAMMAR PUBLIC SCHOOL</h2>
// <p className="text-gray-600">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</p>
// <p className="text-gray-600">Phone: 03365716844</p>
// </div>

// <div className="text-center mb-6">
// <h3 className="text-xl font-semibold underline">LEAVING CERTIFICATE</h3>
// </div>

// <div className="space-y-4 mb-6">
// <p>This is to certify that <span className="font-semibold">[Student Name]</span>, 
// son/daughter of <span className="font-semibold">[Father Name]</span>, 
// was a student of this school from <span className="font-semibold">[Admission Date]</span> 
// to <span className="font-semibold">[Leaving Date]</span>.</p>

// <p>He/She was studying in class <span className="font-semibold">[Class]</span> 
// and his/her roll number was <span className="font-semibold">[Roll Number]</span>.</p>

// <p>His/Her conduct during the stay in the school was <span className="font-semibold">[Conduct]</span>.</p>

// <p>He/She has paid all the dues of the school and has no outstanding amount against him/her.</p>

// <p>We wish him/her success in future endeavors.</p>
// </div>

// <div className="flex justify-between items-end mt-12">
// <div>
// <p>Date: <span className="font-semibold">{new Date().toLocaleDateString()}</span></p>
// <p>Place: Dera Ismail Khan</p>
// </div>
// <div className="text-center">
// <div className="mb-2">_________________________</div>
// <div className="font-semibold">Principal</div>
// <div>Iqra Grammar Public School</div>
// </div>
// </div>

// <div className="text-center mt-8 text-sm text-gray-500">
// <p>Note: This certificate is computer generated and does not require signature.</p>
// </div>
// </div>

// <div className="mt-6 flex justify-center space-x-4">
// <button onClick={handlePrintLeavingCertificate} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
// <Printer className="h-4 w-4 mr-2" />
// Print Certificate
// </button>
// <button onClick={handleDownloadLeavingCertificate} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
// <Download className="h-4 w-4 mr-2" />
// Download Certificate
// </button>
// <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
// Back to Dashboard
// </button>
// </div>
// </div>
// </div>
// </div>
// )}

// <footer className="border-t mt-12 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Iqra Grammar Public School</footer>





// {/* Toast animation style */}
// <style>{`
// @keyframes slideIn {
//   from { transform: translateX(100%); opacity: 0; }
//   to { transform: translateX(0); opacity: 1; }
// }
// .animate-sladeIn {
//   animation: slideIn 0.35s ease-out;
// }
// /* hide print helpers in screen */
// @media print {
//   .animate-slideIn, nav, footer, .fixed { display: none !important; }
// }
// `}</style>
// </div>
// )};


import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import {
  User, GraduationCap, Phone, DollarSign, Home, BookOpen, Settings,
  Download, Printer, Plus, Search, Eye, CreditCard, UserPlus, Calculator,
  LogOut, School, FileText, Award, BarChart3, Users, Trash2, Edit3, X,
  Mail, Calendar, MapPin, Clock, Pencil, Shield, Star, Book, Menu, Camera
} from 'lucide-react';
import Slider from './component/Slider';

// Single-file React component for IGPS school app
// Built to be used inside a Create React App or Vite project with Tailwind CSS

export default function SchoolApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); // 'student' or ''
  const [studentInfo, setStudentInfo] = useState({ name: '', class: '', rollNo: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [searchTerm, setSearchTerm] = useState(''); // admin search
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [paymentType, setPaymentType] = useState('full');
  const [customAmount, setCustomAmount] = useState('');
  const printRef = useRef(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // ---------- PERSISTENCE: load/save studentsData ----------
  const STORAGE_KEY = 'igps_students_data_v1';
  const TEACHERS_STORAGE_KEY = 'igps_teachers_data_v1';
  const GLOBAL_FEES_STORAGE_KEY = 'igps_global_fees_data_v1';
  const RESULTS_STORAGE_KEY = 'igps_results_data_v1';
  const STUDENT_PROFILES_STORAGE_KEY = 'igps_student_profiles_data_v1';

  const [studentsData, setStudentsData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved students data', e);
    }
    // START EMPTY (no pre-added classes) as you requested
    return {};
  });

  const [teachersData, setTeachersData] = useState(() => {
    try {
      const saved = localStorage.getItem(TEACHERS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved teachers data', e);
    }
    return [];
  });

  const [globalFees, setGlobalFees] = useState(() => {
    try {
      const saved = localStorage.getItem(GLOBAL_FEES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved global fees data', e);
    }
    return [];
  });

  // For DMC (results) - simplified data structure
  const [resultsData, setResultsData] = useState(() => {
    try {
      const saved = localStorage.getItem(RESULTS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved results data', e);
    }
    return {};
  });

  // Student profiles with photos
  const [studentProfiles, setStudentProfiles] = useState(() => {
    try {
      const saved = localStorage.getItem(STUDENT_PROFILES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved student profiles data', e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsData));
    } catch (e) {
      console.error('Failed to save students data', e);
    }
  }, [studentsData]);

  useEffect(() => {
    try {
      localStorage.setItem(TEACHERS_STORAGE_KEY, JSON.stringify(teachersData));
    } catch (e) {
      console.error('Failed to save teachers data', e);
    }
  }, [teachersData]);

  useEffect(() => {
    try {
      localStorage.setItem(GLOBAL_FEES_STORAGE_KEY, JSON.stringify(globalFees));
    } catch (e) {
      console.error('Failed to save global fees data', e);
    }
  }, [globalFees]);

  useEffect(() => {
    try {
      localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(resultsData));
    } catch (e) {
      console.error('Failed to save results data', e);
    }
  }, [resultsData]);

  useEffect(() => {
    try {
      localStorage.setItem(STUDENT_PROFILES_STORAGE_KEY, JSON.stringify(studentProfiles));
    } catch (e) {
      console.error('Failed to save student profiles data', e);
    }
  }, [studentProfiles]);
  // -------------------------------------------------------

  // For admin: add class and add student form states
  const [newClassName, setNewClassName] = useState('');
  const [newStudent, setNewStudent] = useState({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' });

  // For editing student
  const [editingStudent, setEditingStudent] = useState(null); // { classKey, ...student }

  // For extra-fee UI (global)
  const [globalExtraLabel, setGlobalExtraLabel] = useState('');
  const [globalExtraAmount, setGlobalExtraAmount] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);

  // For adding per-student extra fee in edit panel
  const [editExtraLabel, setEditExtraLabel] = useState('');
  const [editExtraAmount, setEditExtraAmount] = useState('');

  // For teacher management
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    fatherName: '',
    cnic: '',
    phone: '',
    salary: '',
    section: '',
    qualification: '',
    experience: '',
    joinDate: ''
  });

  // For DMC management - simplified
  const [dmcSubjects, setDmcSubjects] = useState([
    { name: 'English', obtained: '', total: '', grade: '' },
    { name: 'Math', obtained: '', total: '', grade: '' },
    { name: 'Science', obtained: '', total: '', grade: '' },
    { name: 'Urdu', obtained: '', total: '', grade: '' },
    { name: 'Islamiat', obtained: '', total: '', grade: '' },
    { name: 'Social Studies', obtained: '', total: '', grade: '' }
  ]);
  const [dmcStudentInfo, setDmcStudentInfo] = useState({
    class: '',
    rollNo: '',
    name: '',
    fatherName: '',
    totalObtained: 0,
    totalMarks: 0,
    percentage: 0,
    grade: '',
    position: ''
  });

  // For student profile management
  const [newStudentProfile, setNewStudentProfile] = useState({
    name: '',
    fatherName: '',
    class: '',
    rollNo: '',
    phone: '',
    birthDate: '',
    photo: null
  });

  // ---------- Toast system (no alerts) ----------
  const [toasts, setToasts] = useState([]); // {id, message, type, confirm, onConfirm}
const addToast1 = (message, { type = 'warning', duration = 1400 } = {}) => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2);
    const toast = { id, message, type, confirm: false };
    setToasts(prev => [...prev, toast]);
    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, duration);
    }
    return id;
  };
  const addToast = (message, { type = 'success', duration = 1400 } = {}) => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2);
    const toast = { id, message, type, confirm: false };
    setToasts(prev => [...prev, toast]);
    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, duration);
    }
    return id;
  };

  const addConfirmToast = (message, onConfirm, { duration = 5000 } = {}) => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2);
    const toast = { id, message, type: 'confirm', confirm: true, onConfirm };
    setToasts(prev => [...prev, toast]);
    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, duration);
    }
    return id;
  };

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));
  // ------------------------------------------------

  // Helpers
  const getAllStudents = () => {
    const all = [];
    Object.keys(studentsData).forEach(classKey => {
      const arr = studentsData[classKey] || [];
      arr.forEach(s => all.push({ ...s, classKey }));
    });
    return all;
  };

  const formatCurrency = (n) => `Rs. ${Number(n || 0).toLocaleString()}`;

  // Calculate total pending for display: base pendingFee + sum of extraFees pending
  const calculateTotalPendingForStudent = (s) => {
    const basePending = Number(s.pendingFee || 0);
    const extrasPending = (s.extraFees || []).reduce((acc, ef) => acc + (ef.status === 'pending' ? Number(ef.amount || 0) : 0), 0);
    return basePending + extrasPending;
  };

  // Student side search
  const handleStudentSearch = (e) => {
    if (e) e.preventDefault();
    const classStudents = studentsData[studentInfo.class] || [];
    const student = classStudents.find(s =>
      s.name.toLowerCase() === studentInfo.name.trim().toLowerCase() && s.rollNo === studentInfo.rollNo.trim()
    );

    if (student) {
      setSelectedStudent({ ...student, className: studentInfo.class });
      setCurrentPage('student-fee-detail');
    } else {
      addToast('Student not found! Please check Name, Class and Roll Number.', { type: 'error' });
    }
  };

  // DMC search
  const handleDmcSearch = (e) => {
    if (e) e.preventDefault();
    const classResults = resultsData[studentInfo.class] || {};
    const result = classResults[studentInfo.rollNo];

    if (result && result.name.toLowerCase() === studentInfo.name.trim().toLowerCase()) {
      setSelectedStudent({
        ...result,
        className: studentInfo.class,
        hasDmc: true
      });
      setCurrentPage('student-dmc');
    } else {
      addToast('Result not found! Please check Name, Class and Roll Number.', { type: 'error' });
    }
  };

  // Admin login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginForm;
    // preserved the password text exactly as in your pasted code
    if (username === 'IGPS' && password === 'IQRAGPS') {
      setIsAdminLoggedIn(true);
      setCurrentPage('admin-dashboard');
      setLoginForm({ username: '', password: '' });
      addToast('Admin logged in.');
    } else {
      addToast('Invalid admin credentials.', { type: 'error' });
    }
  };

  // Admin: add class
  const addClass = () => {
    const key = newClassName.trim();
    if (!key) {
      addToast('Please enter a class key (e.g. class-4)', { type: 'error' });
      return;
    }
    if (studentsData[key]) {
      addToast('This class already exists.', { type: 'error' });
      return;
    }
    setStudentsData(prev => ({ ...prev, [key]: [] }));
    setNewClassName('');
    addToast('Class added successfully.');
  };

  // Admin: add student
  const addStudent = () => {
    const { name, rollNo, fatherName, monthlyFee, classKey } = newStudent;
    if (!name || !rollNo || !fatherName || !monthlyFee || !classKey) {
      addToast('Please fill all fields to add student.', { type: 'error' });
      return;
    }

    const updated = { ...studentsData };
    if (!updated[classKey]) updated[classKey] = [];

    const all = getAllStudents();
    const newId = all.length > 0 ? Math.max(...all.map(s => s.id)) + 1 : 1;

    updated[classKey].push({
      id: newId,
      name: name.trim(),
      rollNo: rollNo.trim(),
      fatherName: fatherName.trim(),
      monthlyFee: parseInt(monthlyFee, 10),
      pendingFee: parseInt(monthlyFee, 10),
      totalPaid: 0,
      feeHistory: [],
      extraFees: [] // initialize extra fees array
    });

    setStudentsData(updated);
    setNewStudent({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' });
    addToast('Student added to class.');
  };

  // For student profile management
  const [editingProfileId, setEditingProfileId] = useState(null);

  // ---- Add student profile ----
  const addStudentProfile = () => {
    const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;

    if (!name || !fatherName || !className || !rollNo) {
      addToast('Please fill all required fields to add student profile.', { type: 'error' });
      return;
    }

    const safeProfiles = Array.isArray(studentProfiles) ? studentProfiles : [];
    const newId = safeProfiles.length > 0 ? Math.max(...safeProfiles.map(p => p.id)) + 1 : 1;

    const saveProfile = (photoBase64 = null) => {
      const profile = {
        id: newId,
        name: name.trim(),
        fatherName: fatherName.trim(),
        class: className.trim(),
        rollNo: rollNo.trim(),
        phone: phone ? phone.trim() : '',
        birthDate: birthDate || '',
        photo: photoBase64
      };
      setStudentProfiles(prev => [...(Array.isArray(prev) ? prev : []), profile]);
      setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
      addToast('Student profile added successfully.');
    };

    // If user provided a File -> convert to base64
    if (photo instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => saveProfile(e.target.result);
      reader.readAsDataURL(photo);
    } else {
      // no file (or photo is already base64 - but for add, it should be null)
      saveProfile(photo ?? null);
    }
  };

  // ---- Start editing (fills the form) ----
  const startEditingProfile = (profile) => {
    setEditingProfileId(profile.id);
    setNewStudentProfile({
      id: profile.id,
      name: profile.name ?? '',
      fatherName: profile.fatherName ?? '',
      class: profile.class ?? '',
      rollNo: profile.rollNo ?? '',
      phone: profile.phone ?? '',
      birthDate: profile.birthDate ?? '',
      photo: null // IMPORTANT: null means "no new file uploaded yet"
    });
    // optional: scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---- Update student profile ----
  const updateStudentProfile = () => {
    if (!editingProfileId) return;

    const { name, fatherName, class: className, rollNo, phone, birthDate, photo } = newStudentProfile;
    if (!name || !fatherName || !className || !rollNo) {
      addToast('Please fill all required fields to update student profile.', { type: 'error' });
      return;
    }

    const applyUpdate = (photoBase64 = null) => {
      setStudentProfiles(prev =>
        (Array.isArray(prev) ? prev : []).map(p =>
          p.id === editingProfileId
            ? {
              ...p,
              name: name.trim(),
              fatherName: fatherName.trim(),
              class: className.trim(),
              rollNo: rollNo.trim(),
              phone: phone ? phone.trim() : '',
              birthDate: birthDate || '',
              photo: photoBase64 ?? p.photo ?? null // use new photo if provided, else keep existing
            }
            : p
        )
      );

      setEditingProfileId(null);
      setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
      addToast('Student profile updated successfully.');
    };

    // Only convert to base64 if the uploaded item is a File
    if (photo instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => applyUpdate(e.target.result);
      reader.readAsDataURL(photo);
    } else {
      // no new file uploaded: keep previous photo stored in profiles
      applyUpdate();
    }
  };

  // ---- Cancel editing (reset form) ----
  const cancelEditing = () => {
    setEditingProfileId(null);
    setNewStudentProfile({ id: null, name: '', fatherName: '', class: '', rollNo: '', phone: '', birthDate: '', photo: null });
  };

  // ---- Delete student profile ----
  const deleteStudentProfile = (id) => {
    addConfirmToast('Delete this student profile?', () => {
      setStudentProfiles(prev => (Array.isArray(prev) ? prev.filter(profile => profile.id !== id) : []));
      addToast('Student profile deleted.');
    }, { duration: 7000 });
  };

  // Replaces the broken applyGlobalExtraToSelectedClasses implementation
  const applyGlobalExtraToSelectedClasses = () => {
    const label = (globalExtraLabel || '').trim();
    const amount = Number(globalExtraAmount || 0);
    if (!label || amount <= 0) {
      addToast('Provide valid label and amount for global extra fee.', { type: 'error' });
      return;
    }

    if (!selectedClasses || selectedClasses.length === 0) {
      addToast('Please select at least one class.', { type: 'error' });
      return;
    }

    // new global fee object
    const newGlobalFee = {
      id: Date.now().toString(),
      label,
      amount,
      appliedTo: [...selectedClasses],
      date: new Date().toLocaleDateString()
    };

    // add to globalFees safely
    setGlobalFees(prev => Array.isArray(prev) ? [...prev, newGlobalFee] : [newGlobalFee]);

    // safely copy studentsData and add extra fee entries to students in selected classes
    setStudentsData(prevStudents => {
      const updated = { ...(prevStudents || {}) };

      Object.keys(updated).forEach(classKey => {
        if (selectedClasses.includes(classKey)) {
          updated[classKey] = (updated[classKey] || []).map(student => {
            const copy = { ...student };
            copy.extraFees = Array.isArray(copy.extraFees) ? [...copy.extraFees] : [];
            // create a unique id using timestamp + random suffix
            const efId = Date.now().toString() + Math.random().toString(36).slice(2);
            copy.extraFees.push({
              id: efId,
              label,
              amount,
              status: 'pending',
              globalFeeId: newGlobalFee.id,
              createdAt: new Date().toISOString()
            });
            return copy;
          });
        }
      });

      return updated;
    });

    // reset UI fields
    setGlobalExtraLabel('');
    setGlobalExtraAmount('');
    setSelectedClasses([]);
    addToast(`Global extra "${label}" added to selected classes.`);
  };

  const removeGlobalExtraFee = (feeId) => {
    addConfirmToast('Remove this global fee from all students?', () => {
      // remove from global fees
      setGlobalFees(prev => (Array.isArray(prev) ? prev.filter(f => f.id !== feeId) : []));

      // remove matching extra fees from each student
      setStudentsData(prev => {
        const updated = { ...(prev || {}) };
        Object.keys(updated).forEach(classKey => {
          updated[classKey] = (updated[classKey] || []).map(student => {
            const st = { ...student };
            st.extraFees = (st.extraFees || []).filter(ef => ef.globalFeeId !== feeId);
            return st;
          });
        });
        return updated;
      });

      addToast('Global fee removed from all students.');
    }, { duration: 7000 });
  };

  // Toggle class selection for global extra fees
  const toggleClassSelection = (classKey) => {
    if (selectedClasses.includes(classKey)) {
      setSelectedClasses(selectedClasses.filter(c => c !== classKey));
    } else {
      setSelectedClasses([...selectedClasses, classKey]);
    }
  };

  // Select all classes for global extra fees
  const selectAllClasses = () => {
    setSelectedClasses(Object.keys(studentsData));
  };

  // Deselect all classes for global extra fees
  const deselectAllClasses = () => {
    setSelectedClasses([]);
  };

  // Replaces addExtraToEditingStudent
  const addExtraToEditingStudent = () => {
    if (!editingStudent) {
      addToast('No student selected to add extra fee to.', { type: 'error' });
      return;
    }
    const label = (editExtraLabel || '').trim();
    const amount = Number(editExtraAmount || 0);
    if (!label || amount <= 0) {
      addToast('Provide valid label and amount for extra fee.', { type: 'error' });
      return;
    }

    const classKey = editingStudent.classKey;
    if (!classKey) {
      addToast('Editing student has no classKey.', { type: 'error' });
      return;
    }

    // Update studentsData in a safe immutable way
    setStudentsData(prev => {
      const copy = { ...(prev || {}) };
      if (!Array.isArray(copy[classKey])) return prev; // nothing changed if missing
      const idx = copy[classKey].findIndex(s => s.id === editingStudent.id);
      if (idx === -1) return prev;
      const st = { ...copy[classKey][idx] };
      st.extraFees = Array.isArray(st.extraFees) ? [...st.extraFees] : [];
      st.extraFees.push({
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        label,
        amount,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      copy[classKey] = [...copy[classKey]];
      copy[classKey][idx] = st;
      return copy;
    });

    // refresh editingStudent in-memory representation
    setEditingStudent(prev => {
      const currentExtras = Array.isArray(prev?.extraFees) ? [...prev.extraFees] : [];
      return { ...prev, extraFees: [...currentExtras, { id: Date.now().toString() + Math.random().toString(36).slice(2), label, amount, status: 'pending' }] };
    });

    setEditExtraLabel('');
    setEditExtraAmount('');
    addToast('Extra fee added to student.');
  };

  // Admin: edit student (updates fields)
  const saveEditedStudent = () => {
    if (!editingStudent) return;
    const { classKey, id, name, rollNo, fatherName, monthlyFee, pendingFee, totalPaid, extraFees } = editingStudent;
    if (!classKey) {
      addToast('Missing class for student.', { type: 'error' });
      return;
    }

    setStudentsData(prev => {
      const copy = { ...prev };
      if (!copy[classKey]) return prev;
      const idx = copy[classKey].findIndex(s => s.id === id);
      if (idx === -1) return prev;
      copy[classKey][idx] = {
        ...copy[classKey][idx],
        name: (name || '').trim(),
        rollNo: (rollNo || '').trim(),
        fatherName: (fatherName || '').trim(),
        monthlyFee: Number(monthlyFee) || 0,
        pendingFee: Number(pendingFee) || 0,
        totalPaid: Number(totalPaid) || 0,
        extraFees: Array.isArray(extraFees) ? extraFees : (copy[classKey][idx].extraFees || [])
      };
      return copy;
    });
    setEditingStudent(null);
    addToast1('Editing Cancel.');
  };

  // Admin: mark an extra fee as removed (for a student) - remove pending extra (admin might choose to remove)
  const removeExtraFromStudent = (classKey, studentId, extraId) => {
    addConfirmToast('Remove this extra fee for student?', () => {
      setStudentsData(prev => {
        const copy = { ...prev };
        if (!copy[classKey]) return prev;
        const idx = copy[classKey].findIndex(s => s.id === studentId);
        if (idx === -1) return prev;
        const st = { ...copy[classKey][idx] };
        st.extraFees = (st.extraFees || []).filter(e => e.id !== extraId);
        copy[classKey][idx] = st;
        return copy;
      });
      addToast('Extra fee removed.');
    }, { duration: 7000 });
  };

  // Admin: delete student (uses confirm toast)
  const deleteStudent = (classKey, id) => {
    addConfirmToast('Delete this student?', () => {
      setStudentsData(prev => {
        const copy = { ...prev };
        copy[classKey] = (copy[classKey] || []).filter(s => s.id !== id);
        return copy;
      });
      // if this student was open, close the detail view
      if (selectedStudent && selectedStudent.id === id && (selectedStudent.className === classKey || selectedStudent.classKey === classKey)) {
        setSelectedStudent(null);
        setCurrentPage('admin-dashboard');
      }
      addToast('Student deleted.');
    }, { duration: 7000 });
  };

  // Add teacher
  const addTeacher = () => {
    const { name, fatherName, cnic, phone, salary, section, qualification, experience, joinDate } = newTeacher;
    if (!name || !fatherName || !cnic || !phone || !salary || !section) {
      addToast('Please fill all required fields to add teacher.', { type: 'error' });
      return;
    }

    const newId = teachersData.length > 0 ? Math.max(...teachersData.map(t => t.id)) + 1 : 1;

    setTeachersData(prev => [
      ...prev,
      {
        id: newId,
        name: name.trim(),
        fatherName: fatherName.trim(),
        cnic: cnic.trim(),
        phone: phone.trim(),
        salary: parseInt(salary, 10),
        section: section.trim(),
        qualification: qualification.trim(),
        experience: experience.trim(),
        joinDate: joinDate || new Date().toLocaleDateString()
      }
    ]);

    setNewTeacher({ name: '', fatherName: '', cnic: '', phone: '', salary: '', section: '', qualification: '', experience: '', joinDate: '' });
    addToast('Teacher added successfully.');
  };

  // Delete teacher
  const deleteTeacher = (id) => {
    addConfirmToast('Delete this teacher?', () => {
      setTeachersData(prev => prev.filter(teacher => teacher.id !== id));
      addToast('Teacher deleted.');
    }, { duration: 7000 });
  };

  // View teacher details
  const viewTeacherDetails = (teacher) => {
    setSelectedTeacher(teacher);
    setCurrentPage('teacher-details');
  };

  // View student profile details
  const viewStudentProfile = (profile) => {
    setSelectedStudent(profile);
    setCurrentPage('student-profile-detail');
  };

  // Add DMC for student
  const addDmc = () => {
    const { class: className, rollNo, name, fatherName, totalObtained, totalMarks, percentage, grade, position } = dmcStudentInfo;

    if (!className || !rollNo || !name) {
      addToast('Please select class and enter student details.', { type: 'error' });
      return;
    }

    // Convert subjects array to object format
    const subjectsObj = {};
    dmcSubjects.forEach(subject => {
      if (subject.obtained && subject.total) {
        subjectsObj[subject.name] = {
          obtained: parseInt(subject.obtained),
          total: parseInt(subject.total),
          grade: subject.grade || calculateGrade(parseInt(subject.obtained), parseInt(subject.total))
        };
      }
    });

    setResultsData(prev => {
      const copy = { ...prev };
      if (!copy[className]) copy[className] = {};

      copy[className][rollNo] = {
        name,
        rollNo,
        fatherName,
        subjects: subjectsObj,
        totalObtained: parseInt(totalObtained) || calculateTotalObtained(),
        totalMarks: parseInt(totalMarks) || calculateTotalMarks(),
        percentage: parseFloat(percentage) || calculatePercentage(),
        grade: grade || calculateOverallGrade(),
        position: position || ''
      };

      return copy;
    });

    // Reset form
    setDmcSubjects([
      { name: 'English', obtained: '', total: '', grade: '' },
      { name: 'Math', obtained: '', total: '', grade: '' },
      { name: 'Science', obtained: '', total: '', grade: '' },
      { name: 'Urdu', obtained: '', total: '', grade: '' },
      { name: 'Islamiat', obtained: '', total: '', grade: '' },
      { name: 'Social Studies', obtained: '', total: '', grade: '' }
    ]);

    setDmcStudentInfo({
      class: '',
      rollNo: '',
      name: '',
      fatherName: '',
      totalObtained: 0,
      totalMarks: 0,
      percentage: 0,
      grade: '',
      position: ''
    });

    addToast('DMC added successfully.');
  };

  // Helper functions for DMC calculations
  const calculateTotalObtained = () => {
    return dmcSubjects.reduce((total, subject) => total + (parseInt(subject.obtained) || 0), 0);
  };

  const calculateTotalMarks = () => {
    return dmcSubjects.reduce((total, subject) => total + (parseInt(subject.total) || 0), 0);
  };

  const calculatePercentage = () => {
    const totalObtained = calculateTotalObtained();
    const totalMarks = calculateTotalMarks();
    return totalMarks > 0 ? (totalObtained / totalMarks) * 100 : 0;
  };

  const calculateGrade = (obtained, total) => {
    if (!obtained || !total) return '';
    const percentage = (obtained / total) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  };

  const calculateOverallGrade = () => {
    const percentage = calculatePercentage();
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  };

  // Auto-calculate when subject marks change
  useEffect(() => {
    const totalObtained = calculateTotalObtained();
    const totalMarks = calculateTotalMarks();
    const percentage = calculatePercentage();
    const grade = calculateOverallGrade();

    setDmcStudentInfo(prev => ({
      ...prev,
      totalObtained,
      totalMarks,
      percentage,
      grade
    }));
  }, [dmcSubjects]);

  // Load student info when class and roll number are selected
  useEffect(() => {
    if (dmcStudentInfo.class && dmcStudentInfo.rollNo) {
      const classStudents = studentsData[dmcStudentInfo.class] || [];
      const student = classStudents.find(s => s.rollNo === dmcStudentInfo.rollNo);

      if (student) {
        setDmcStudentInfo(prev => ({
          ...prev,
          name: student.name,
          fatherName: student.fatherName
        }));
      }
    }
  }, [dmcStudentInfo.class, dmcStudentInfo.rollNo, studentsData]);

  // Delete DMC
  const deleteDmc = (className, rollNo) => {
    addConfirmToast('Delete this DMC?', () => {
      setResultsData(prev => {
        const copy = { ...prev };
        if (copy[className] && copy[className][rollNo]) {
          delete copy[className][rollNo];
          // Remove class if empty
          if (Object.keys(copy[className]).length === 0) {
            delete copy[className];
          }
        }
        return copy;
      });
      addToast('DMC deleted successfully.');
    }, { duration: 7000 });
  };

  // Payment handling (supports full, monthly, half, custom)
  // This will pay base pendingFee first, then pending extra fees in FIFO order.
  const handlePayment = (e) => {
    if (e) e.preventDefault();
    if (!selectedStudent) return;

    let amountToPay = 0;
    if (paymentType === 'full') amountToPay = Number(calculateTotalPendingForStudent(selectedStudent) || 0);
    else if (paymentType === 'monthly') amountToPay = Number(selectedStudent.monthlyFee || 0);
    else if (paymentType === 'half') {
      const pending = Number(calculateTotalPendingForStudent(selectedStudent) || 0);
      amountToPay = Math.ceil(pending / 2);
    }
    else if (paymentType === 'custom') {
      amountToPay = parseInt(customAmount, 10) || 0;
      if (amountToPay <= 0) {
        addToast('Please enter a valid custom amount.', { type: 'error' });
        return;
      }
    }

    if (amountToPay <= 0) {
      addToast('Please enter a valid payment amount.', { type: 'error' });
      return;
    }

    // compute total pending
    const totalPending = calculateTotalPendingForStudent(selectedStudent);
    if (amountToPay > totalPending) {
      addToast('Payment cannot exceed total pending fee.', { type: 'error' });
      return;
    }

    const updated = { ...studentsData };
    const classKey = selectedStudent.className || selectedStudent.classKey;
    const studentIndex = updated[classKey].findIndex(s => s.id === selectedStudent.id);
    if (studentIndex === -1) {
      addToast('Student not found in data.', { type: 'error' });
      return;
    }

    const studentRef = { ...updated[classKey][studentIndex] }; // shallow copy
    let remaining = amountToPay;
    const feeHistoryAdds = [];

    // 1) Pay base pendingFee first
    const basePending = Number(studentRef.pendingFee || 0);
    if (basePending > 0 && remaining > 0) {
      const payBase = Math.min(basePending, remaining);
      studentRef.pendingFee = Math.max(0, basePending - payBase);
      studentRef.totalPaid = (studentRef.totalPaid || 0) + payBase;
      remaining -= payBase;
      feeHistoryAdds.push({
        month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        amount: payBase,
        status: 'Paid',
        date: new Date().toLocaleDateString(),
        note: 'Base fee'
      });
    }

    // 2) Then pay extras in FIFO order
    studentRef.extraFees = studentRef.extraFees || [];
    for (let i = 0; i < studentRef.extraFees.length && remaining > 0; i++) {
      const ef = { ...studentRef.extraFees[i] };
      if (ef.status === 'pending') {
        const efAmount = Number(ef.amount || 0);
        if (remaining >= efAmount) {
          // fully pay this extra
          ef.status = 'paid';
          ef.datePaid = new Date().toLocaleDateString();
          remaining -= efAmount;
          studentRef.totalPaid = (studentRef.totalPaid || 0) + efAmount;
          feeHistoryAdds.push({
            month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            amount: efAmount,
            status: 'Paid',
            date: ef.datePaid,
            note: ef.label
          });
        } else {
          // partial payment on an extra -> decrease ef.amount and add a payment record
          ef.amount = Number(efAmount - remaining);
          // record a paid portion entry in feeHistory
          const paidPortion = remaining;
          studentRef.totalPaid = (studentRef.totalPaid || 0) + paidPortion;
          feeHistoryAdds.push({
            month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            amount: paidPortion,
            status: 'Paid (partial)',
            date: new Date().toLocaleDateString(),
            note: ef.label + ' (partial)'
          });
          remaining = 0;
        }
        studentRef.extraFees[i] = ef;
      }
    }

    // update feeHistory: append entries
    studentRef.feeHistory = studentRef.feeHistory || [];
    studentRef.feeHistory.push(...feeHistoryAdds);

    // update dataset
    updated[classKey][studentIndex] = studentRef;
    setStudentsData(updated);

    // update selectedStudent state to reflect new values
    setSelectedStudent({ ...studentRef, className: classKey });

    // clear custom amount
    setCustomAmount('');
    setPaymentType('full');
    addToast(`Payment of Rs. ${amountToPay.toLocaleString()} processed successfully!`);
  };

  // ---------- PRINTING (Landscape, 2 students per page, each with School & Student copy) ----------
  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  const escapeHtml = (str = '') => String(str).replace(/[&<>"']/g, function (m) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
  });

  const formatPrintCurrency = (n) => `Rs. ${Number(n || 0).toLocaleString()}`;

  const buildPrintableHtml = (students = [], title = 'IGPS Fee Statements') => {
    // students array expected to have classKey in each
    const pages = chunk(students, 2); // 2 students per page
    return `
<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>${escapeHtml(title)}</title>
    <style>
  @page {
    size: A4 landscape;
    margin: 10mm;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: #111;
  }
  .page {
    box-sizing: border-box;
    display: grid;
    gap:.6rem;
    height:100%;
    width:100%;
    grid-template-columns: repeat(2, 1fr);
    place-contents: center;
    margin-bottom: 4rem;
    margin-top: 2rem;
    // border: 1px solid black;
    overflow: hidden;
    place-items:center;

  }
  .student-block {
    display:flex;
    flex-direction: column;
    gap: 1mm;
    height:100%;
    border-radius: 8px;
  }
  .receipt {
    border: 2px dashed #888;
    padding: 3mm;
    height:310px;
    width:500px;
    border-radius: 10px;
    position: relative;
    background: #fff;
    overflow: hidden;
  }
  .receipt .watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    opacity: 0.15;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
  }
  .receipt .content { position: relative; z-index: 1; }
  .header { font-size: 18px; font-weight: bold; color: #0b5ed7; margin-bottom: 2px; }
  .school-no { font-size: 12px; font-weight: bold; color: #333; margin-bottom: 6px; }
  .meta { font-size: 12px; color: #555; margin-bottom: 8px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
  .fee-box { border: 1px solid #ccc; border-radius: 6px; padding: 6px; text-align: center; background: #fff; }
  .fee-label { font-size: 12px; color: #555; }
  .fee-value { font-size: 15px; font-weight: bold; margin-top: 4px; }
  .copy-label { text-align: right; font-size: 11px; color: #888; font-style: italic; }
  .extras { margin-top:8px; font-size:12px; }
    </style>
</head>
<body>
${pages.map(page => `<div class="page">${page.map(s => {
      // compute base pending + extras pending
      const basePending = Number(s.pendingFee || 0);
      const extrasPending = (s.extraFees || []).reduce((acc, ef) => acc + (ef.status === 'pending' ? Number(ef.amount || 0) : 0), 0);
      const total = (s.monthlyFee || 0) + basePending - 0 + extrasPending; // monthly + pending extras (keeps parity)
      return `
        <div class="student-block">
          <!-- School Copy -->
          <div class="receipt">
            <img src="../public/LOGO.jpg" class="watermark" alt="Logo"/>
            <div class="content">
              <div class="copy-label">School Copy</div>
              <div class="header">Iqra Grammar Public School</div>
              <div class="school-no">Ph: 03365716844</div>
              <div class="meta">Fee Statement • ${new Date().toLocaleDateString()}</div>
              <div><b>Student:</b> ${escapeHtml(s.name)} (Roll: ${escapeHtml(s.rollNo || "")})</div>
              <div><b>Father:</b> ${escapeHtml(s.fatherName || "")}</div>
              <div><b>Class:</b> ${escapeHtml(s.classKey || "")}</div>
              <div class="grid">
                <div class="fee-box"><div class="fee-label">Monthly Fee</div><div class="fee-value">${formatPrintCurrency(s.monthlyFee)}</div></div>
                <div class="fee-box"><div class="fee-label">Pending (Base)</div><div class="fee-value">${formatPrintCurrency(basePending)}</div></div>
              </div>
              <div class="extras">
                <div><b>Extra Fees:</b></div>
                ${(s.extraFees || []).length === 0 ? '<div class="text-muted">None</div>' : (s.extraFees.map(ef => `<div>${escapeHtml(ef.label)}: ${formatPrintCurrency(ef.amount)} ${ef.status === 'paid' ? '(PAID)' : ''}</div>`).join(''))}
              </div>
              <div style="margin-top:6px;"><b>Total Due:</b> ${formatPrintCurrency(basePending + extrasPending)}</div>
            </div>
          </div>

          <!-- Student Copy -->
          <div class="receipt">
            <img src="../public/LOGO.jpg" class="watermark" alt="Logo"/>
              <div class="content">
              <div class="copy-label">Student Copy</div>
              <div class="header">Iqra Grammar Public School</div>
              <div class="school-no">Ph: 03365716844</div>
              <div class="meta">Fee Statement • ${new Date().toLocaleDateString()}</div>
              <div class="meta">Due date • 5 ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
              <div><b>Student:</b> ${escapeHtml(s.name)} (Roll: ${escapeHtml(s.rollNo || "")})</div>
              <div><b>Father:</b> ${escapeHtml(s.fatherName || "")}</div>
              <div><b>Class:</b> ${escapeHtml(s.classKey || "")}</div>
              <div class="grid">
                <div class="fee-box"><div class="fee-label">Monthly Fee</div><div class="fee-value">${formatPrintCurrency(s.monthlyFee)}</div></div>
                <div class="fee-box"><div class="fee-label">Pending (Base)</div><div class="fee-value">${formatPrintCurrency(basePending)}</div></div>
              </div>
              <div class="extras">
                <div><b>Extra Fees:</b></div>
                ${(s.extraFees || []).length === 0 ? '<div class="text-muted">None</div>' : (s.extraFees.map(ef => `<div>${escapeHtml(ef.label)}: ${formatPrintCurrency(ef.amount)} ${ef.status === 'paid' ? '(PAID)' : ''}</div>`).join(''))}
              </div>
              <div style="margin-top:6px;"><b>Total Due:</b> ${formatPrintCurrency(basePending + extrasPending)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('')}</div>`).join('')}
</body>
</html>
`;
  };

  // Build DMC printable HTML
  const buildDmcPrintableHtml = (student = {}) => {
    return `
<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>IGPS - DMC</title>
<style>
  @page {
    size: A4 portrait;
    margin: 15mm;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: #111;
    background: #fff;
  }
  .dmc-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #000;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    opacity: 0.1;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
  }
  .content {
    position: relative;
    z-index: 1;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
  }
  .school-name {
    font-size: 24px;
    font-weight: bold;
    color: #0b5ed7;
    margin-bottom: 5px;
  }
  .school-address {
    font-size: 14px;
    color: #555;
  }
  .student-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }
  .info-item {
    display: flex;
  }
  .info-label {
    font-weight: bold;
    min-width: 100px;
  }
  .results-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .results-table th,
  .results-table td {
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
  }
  .results-table th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
  .summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  .summary-item {
    padding: 10px;
    border: 1px solid #000;
    text-align: center;
  }
  .summary-value {
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
  }
  .signatures {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
  }
  .signature {
    text-align: center;
    border-top: 1px solid #000;
    padding-top: 40px;
  }
  .footer {
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    color: #555;
  }
  @media print {
    .dmc-container {
      border: none;
    }
  }
</style>
</head>
<body>
  <div class="dmc-container">
    <img src="../public/LOGO.jpg" class="watermark" alt="School Logo"/>
    <div class="content">
      <div class="header">
        <div class="school-name">IQRA GRAMMAR PUBLIC SCHOOL</div>
        <div class="school-address">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</div>
        <div class="school-address">Phone: 03365716844</div>
        <h2>Detailed Marks Certificate</h2>
        <div>Academic Year: ${new Date().getFullYear() - 1}-${new Date().getFullYear()}</div>
      </div>

      <div class="student-info">
        <div class="info-item">
          <span class="info-label">Student Name:</span>
          <span>${escapeHtml(student.name || '')}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Father Name:</span>
          <span>${escapeHtml(student.fatherName || '')}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Class:</span>
          <span>${escapeHtml(student.className || '')}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Roll No:</span>
          <span>${escapeHtml(student.rollNo || '')}</span>
        </div>
      </div>

      <table class="results-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
            <th>Percentage</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          ${student.subjects ? Object.entries(student.subjects).map(([subject, data]) => `
            <tr>
              <td>${escapeHtml(subject)}</td>
              <td>${data.obtained}</td>
              <td>${data.total}</td>
              <td>${((data.obtained / data.total) * 100).toFixed(2)}%</td>
              <td>${data.grade}</td>
            </tr>
          `).join('') : ''}
        </tbody>
      </table>

      <div class="summary">
        <div class="summary-item">
          <div>Total Obtained Marks</div>
          <div class="summary-value">${student.totalObtained || 0}</div>
        </div>
        <div class="summary-item">
          <div>Total Marks</div>
          <div class="summary-value">${student.totalMarks || 0}</div>
        </div>
        <div class="summary-item">
          <div>Percentage</div>
          <div class="summary-value">${student.percentage ? student.percentage.toFixed(2) + '%' : '0%'}</div>
        </div>
        <div class="summary-item">
          <div>Overall Grade</div>
          <div class="summary-value">${student.grade || 'N/A'}</div>
        </div>
        <div class="summary-item">
          <div>Position in Class</div>
          <div class="summary-value">${student.position || 'N/A'}</div>
        </div>
        <div class="summary-item">
          <div>Remarks</div>
          <div class="summary-value">${student.percentage >= 80 ? 'Excellent' : student.percentage >= 70 ? 'Good' : student.percentage >= 60 ? 'Average' : 'Needs Improvement'}</div>
        </div>
      </div>

      <div class="signatures">
        <div class="signature">
          <div>Class Teacher</div>
        </div>
        <div class="signature">
          <div>Principal</div>
        </div>
        <div class="signature">
          <div>Parent/Guardian</div>
        </div>
      </div>

      <div class="footer">
        <p>Generated on: ${new Date().toLocaleDateString()}</p>
        <p>© ${new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;
  };

  // Build Leaving Certificate printable HTML
  const buildLeavingCertificateHtml = (student = {}) => {
    return `
<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>IGPS - Leaving Certificate</title>
<style>
  @page {
    size: A4 portrait;
    margin: 15mm;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', serif;
    color: #000;
    background: #fff;
    line-height: 1.6;
  }
  .certificate-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    border: 2px solid #000;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    opacity: 0.1;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
  }
  .content {
    position: relative;
    z-index: 1;
  }
  .header {
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #000;
    padding-bottom: 20px;
  }
  .school-name {
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
  .school-address {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .certificate-title {
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
    margin: 30px 0;
    text-align: center;
  }
  .certificate-text {
    font-size: 18px;
    text-align: justify;
    margin-bottom: 20px;
  }
  .student-details {
    margin: 30px 0;
    padding: 20px;
    border: 1px solid #000;
    background: #f9f9f9;
  }
  .detail-row {
    display: flex;
    margin-bottom: 10px;
  }
  .detail-label {
    font-weight: bold;
    min-width: 150px;
  }
  .signatures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 60px;
  }
  .signature {
    text-align: center;
    border-top: 1px solid #000;
    padding-top: 60px;
  }
  .signature-name {
    font-weight: bold;
    margin-top: 10px;
  }
  .footer {
    text-align: center;
    margin-top: 40px;
    font-size: 14px;
    color: 555;
  }
  .seal {
    position: absolute;
    right: 50px;
    bottom: 100px;
    width: 120px;
    opacity: 0.8;
  }
  @media print {
    .certificate-container {
      border: none;
    }
  }
</style>
</head>
<body>
  <div class="certificate-container">
    <img src="../public/LOGO.jpg" class="watermark" alt="School Logo"/>
    
    <div class="content">
      <div class="header">
        <div class="school-name">IQRA GRAMMAR PUBLIC SCHOOL</div>
        <div class="school-address">Gulshan Hameed Colony, Opposite Wensum College</div>
        <div class="school-address">Dera Ismail Khan, KPK, Pakistan</div>
        <div class="school-address">Phone: 03365716844 | Email: igps44@gmail.com</div>
      </div>

      <div class="certificate-title">LEAVING CERTIFICATE</div>

      <div class="certificate-text">
        This is to certify that <span class="font-bold">${escapeHtml(student.name || '[Student Name]')}</span>, 
        son/daughter of <span class="font-bold">${escapeHtml(student.fatherName || '[Father Name]')}</span>, 
        was a bona fide student of this school from <span class="font-bold">[Admission Date]</span> 
        to <span class="font-bold">[Leaving Date]</span>.
      </div>

      <div class="certificate-text">
        He/She was studying in class <span class="font-bold">${escapeHtml(student.className || '[Class]')}</span> 
        and his/her roll number was <span class="font-bold">${escapeHtml(student.rollNo || '[Roll Number]')}</span>.
      </div>

      <div class="certificate-text">
        His/Her conduct during the stay in the school was <span class="font-bold">[Conduct]</span> 
        and he/she has shown <span class="font-bold">[Academics Performance]</span> in studies.
      </div>

      <div class="certificate-text">
        He/She has paid all the dues of the school and has no outstanding amount against him/her.
      </div>

      <div class="certificate-text">
        We wish him/her success in all future endeavors.
      </div>

      <div class="student-details">
        <div class="detail-row">
          <span class="detail-label">Certificate Number:</span>
          <span>IGPS/LC/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date of Issue:</span>
          <span>${new Date().toLocaleDateString()}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Reason for Leaving:</span>
          <span>[Reason]</span>
        </div>
      </div>

      <div class="signatures">
        <div class="signature">
          <div>_________________________</div>
          <div class="signature-name">Class Teacher</div>
          <div>${escapeHtml(student.className || '[Class]')}</div>
        </div>
        <div class="signature">
          <div>_________________________</div>
          <div class="signature-name">Principal</div>
          <div>Iqra Grammar Public School</div>
        </div>
      </div>

      <div class="footer">
        <p>Note: This is a computer generated certificate and does not require signature.</p>
        <p>© ${new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
      </div>

      <img src="../public/LOGO.jpg" class="seal" alt="School Seal"/>
    </div>
  </div>
</body>
</html>
`;
  };

  const openPrintWindow = (html) => {
    const newWin = window.open('', '_blank');
    if (!newWin) {
      addToast('Popup blocked — allow popups to print.', { type: 'error', duration: 3000 });
      return;
    }
    newWin.document.open();
    newWin.document.write(html);
    newWin.document.close();
    // small delay to let fonts / layout settle
    setTimeout(() => {
      newWin.focus();
      newWin.print();
      // do not close automatically — let user decide
    }, 500);
  };

  // Print single student (renders one student in printable HTML)
  const handleOpenPrintable = () => {
    if (!selectedStudent) {
      addToast('Nothing to print', { type: 'error' });
      return;
    }
    const html = buildPrintableHtml([{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }], 'IGPS - Student Fee Statement');
    openPrintWindow(html);
  };

  // Print DMC
  const handlePrintDmc = () => {
    if (!selectedStudent) {
      addToast('Nothing to print', { type: 'error' });
      return;
    }
    const html = buildDmcPrintableHtml(selectedStudent);
    openPrintWindow(html);
  };

  // Print Leaving Certificate
  const handlePrintLeavingCertificate = () => {
    if (!selectedStudent) {
      addToast('Please select a student first', { type: 'error' });
      return;
    }
    const html = buildLeavingCertificateHtml(selectedStudent);
    openPrintWindow(html);
  };

  // Print all students of a class (2 per page)
  const handlePrintClass = (classKey) => {
    const arr = (studentsData[classKey] || []).map(s => ({ ...s, classKey }));
    if (!arr.length) {
      addToast('No students in this class.', { type: 'error' });
      return;
    }
    const html = buildPrintableHtml(arr, `IGPS - ${classKey} Fee Statements`)
    openPrintWindow(html);
  };

  // Admin search (live)
  const getFilteredStudents = () => {
    if (!searchTerm) return [];
    const all = getAllStudents();
    return all.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.fatherName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.rollNo || '').includes(searchTerm) ||
      (s.classKey || '').includes(searchTerm)
    );
  };

  // Download currently shown printable area as HTML file
  const handleDownloadHtml = () => {
    const hasStudents = selectedStudent || (Object.keys(studentsData || {}).length > 0);
    if (!hasStudents) {
      addToast('Nothing to download', { type: 'error' });
      return;
    }
    const toDownload = selectedStudent ? [{ ...selectedStudent, classKey: selectedStudent.className || selectedStudent.classKey }] : getAllStudents();
    const html = buildPrintableHtml(toDownload, 'igps-fee-statements');
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-fee' : 'igps-fee-statements') + '.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    addToast('Downloaded HTML');
  };

  // Download DMC as HTML
  const handleDownloadDmc = () => {
    if (!selectedStudent) {
      addToast('Nothing to download', { type: 'error' });
      return;
    }

    const html = buildDmcPrintableHtml(selectedStudent);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-dmc' : 'igps-dmc') + '.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    addToast('DMC downloaded');
  };

  // Download Leaving Certificate as HTML
  const handleDownloadLeavingCertificate = () => {
    if (!selectedStudent) {
      addToast('Please select a student first', { type: 'error' });
      return;
    }

    const html = buildLeavingCertificateHtml(selectedStudent);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (selectedStudent && selectedStudent.name ? selectedStudent.name + '-leaving-cert' : 'igps-leaving-cert') + '.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    addToast('Leaving Certificate downloaded');
  };

  // Update subject field in DMC form
  const updateDmcSubject = (index, field, value) => {
    const updatedSubjects = [...dmcSubjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      [field]: value
    };

    // Auto-calculate grade if obtained and total are provided
    if (field === 'obtained' || field === 'total') {
      const obtained = parseInt(updatedSubjects[index].obtained) || 0;
      const total = parseInt(updatedSubjects[index].total) || 0;

      if (obtained > 0 && total > 0) {
        updatedSubjects[index].grade = calculateGrade(obtained, total);
      }
    }

    setDmcSubjects(updatedSubjects);
  };

  // Add new subject field
  const addNewSubject = () => {
    setDmcSubjects([...dmcSubjects, { name: '', obtained: '', total: '', grade: '' }]);
  };

  // Remove subject field
  const removeSubject = (index) => {
    if (dmcSubjects.length > 1) {
      const updatedSubjects = [...dmcSubjects];
      updatedSubjects.splice(index, 1);
      setDmcSubjects(updatedSubjects);
    }
  };

  // Basic Navigation component with mobile toggle
  const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isMobileMenuOpen]);

    return (
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg nav-container">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <School className="h-8 w-8" />
              <div>
                <span className="font-bold text-xl">IGPS</span>
                <p className="text-xs text-blue-100">Iqra Grammar Public School</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-button md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <div className={`nav-items md:flex space-x-4 ${isMobileMenuOpen ? 'open' : ''}`}>
              <button onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                <BookOpen className="h-4 w-4" />
                <span>About</span>
              </button>
              <button onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </button>
              <button onClick={() => { setCurrentPage('fees'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                <DollarSign className="h-4 w-4" />
                <span>Fees</span>
              </button>
              <button onClick={() => { setCurrentPage('dmc'); setUserType(''); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                <FileText className="h-4 w-4" />
                <span>DMC</span>
              </button>

              {!isAdminLoggedIn ? (
                <button onClick={() => { setCurrentPage('admin-login'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors">
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </button>
              ) : (
                <>
                  <button onClick={() => { setCurrentPage('admin-dashboard'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                    <Settings className="h-4 w-4" />
                    <span>Dashboard</span>
                  </button>
                  <button onClick={() => { setCurrentPage('admin-search'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </button>
                  <button onClick={() => { setCurrentPage('admin-student-profiles'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                    <User className="h-4 w-4" />
                    <span>Student Profiles</span>
                  </button>
                  <button onClick={() => { setCurrentPage('leaving-certificate'); setIsMobileMenuOpen(false); }} className="hover:text-blue-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors">
                    <FileText className="h-4 w-4" />
                    <span>Leaving Cert</span>
                  </button>
                  <button onClick={() => { setIsAdminLoggedIn(false); setCurrentPage('home'); setLoginForm({ username: '', password: '' }); setIsMobileMenuOpen(false); }} className="hover:text-red-200 flex items-center space-x-1 px-2 py-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return(
  <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Toast container (top-right) */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map(t => {
          const bg = t.type === 'error' ? 'bg-red-600' : (t.type === 'confirm' ? 'bg-yellow-500' : 'bg-green-600');
          return (
            <div key={t.id} className={`${bg} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm animate-slideIn`}>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm">{t.message}</div>
                {t.confirm ? (
                  <div className="flex gap-2">
                    <button onClick={() => { t.onConfirm && t.onConfirm(); removeToast(t.id); }} className="bg-white text-black px-2 py-1 rounded text-sm">Yes</button>
                    <button onClick={() => removeToast(t.id)} className="bg-white text-black px-2 py-1 rounded text-sm">No</button>
                  </div>
                ) : (
                  <button onClick={() => removeToast(t.id)} className="text-white opacity-90 text-sm">✕</button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* HOME */}
      {currentPage === 'home' && (
        <div className="container mx-auto px-4 py-12">
          <Slider />
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Quick Access</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center space-x-2 transition-colors">
                <DollarSign className="h-5 w-5" />
                <span>Check Fees</span>
              </button>
              <button onClick={() => { setCurrentPage('dmc'); setUserType(''); }} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 flex items-center space-x-2 transition-colors">
                <FileText className="h-5 w-5" />
                <span>Check Results</span>
              </button>
              <button onClick={() => setCurrentPage('about')} className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT */}
      {currentPage === 'about' && (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About IGPS</h1>

          <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Iqra Grammar Public School has been a beacon of educational excellence for over two decades. Founded with the vision to provide quality education to all segments of society, our institution is committed to nurturing both academic achievement and character development.</p>
                <p className="text-lg text-gray-700 leading-relaxed">We believe in creating an environment where students can explore their potential, develop critical thinking skills, and prepare for the challenges of tomorrow through a balanced approach to education.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <School className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-center mb-4">School Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded shadow">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <div className="text-3xl font-bold text-green-600">25+</div>
                    <div className="text-sm text-gray-600">Teachers</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <div className="text-3xl font-bold text-purple-600">15+</div>
                    <div className="text-sm text-gray-600">Classes</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <div className="text-3xl font-bold text-orange-600">20+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">To be a leading educational institution that empowers students to become confident, creative, and responsible global citizens who contribute positively to society through knowledge, skills, and ethical values.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">To provide exceptional education through innovative teaching methodologies, character building programs, and fostering a love for lifelong learning in a supportive and inclusive environment.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10 mt-12">
            <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose IGPS?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Academic Excellence</h4>
                  <p className="text-gray-600">Consistent outstanding results in board examinations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <User className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Qualified Teachers</h4>
                  <p className="text-gray-600">Highly educated and experienced teaching staff</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BarChart3 className="h-8 w-8 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Modern Curriculum</h4>
                  <p className="text-gray-600">Balanced curriculum with focus on STEM and arts</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Library Resources</h4>
                  <p className="text-gray-600">Well-stocked library with digital resources</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Career Guidance</h4>
                  <p className="text-gray-600">Comprehensive career counseling for students</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Settings className="h-8 w-8 text-indigo-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Technology Integration</h4>
                  <p className="text-gray-600">Smart classrooms and computer lab facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {currentPage === 'contact' && (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Us</h1>

          <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Phone className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-700">+92 3365716844</p>
                      <p className="text-gray-700">+92 3335333946</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-700">IGPS44@gmail.com</p>
                      <p className="text-gray-700">info@igps.edu.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                    <Home className="h-8 w-8 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Address</p>
                      <p className="text-gray-700">Main campus Gulshan hameed colony</p>
                      <p className="text-gray-700">Opposite wensum college</p>
                      <p className="text-gray-700">Dera Ismail khan, KPK, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold mb-8">Office Hours</h2>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Monday - Thursday:</span>
                    <span className="text-gray-700">8:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Friday:</span>
                    <span className="text-gray-700">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Saturday:</span>
                    <span className="text-gray-700">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-semibold">Sunday:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">School Leadership</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Principal:</span>
                      <span className="text-gray-700">Mr. Muhammad Ali</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Vice Principal:</span>
                      <span className="text-gray-700">Ms. Fatima Khan</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Academic Coordinator:</span>
                      <span className="text-gray-700">Mr. Ahmed Hassan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-3xl font-semibold mb-8 text-center">Location Map</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Home className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600">Map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DMC - choice page */}
      {currentPage === 'dmc' && !userType && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Results (DMC)</h1>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <h2 className="text-2xl font-semibold mb-8 text-center">Check Your Results</h2>
              <div className="space-y-6">
                <button onClick={() => { setUserType('student'); setCurrentPage('dmc'); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center justify-center space-x-3">
                  <FileText className="h-6 w-6" />
                  <span className="text-lg font-semibold">View DMC</span>
                </button>
                <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 flex items-center justify-center space-x-3">
                  <Settings className="h-6 w-6" />
                  <span className="text-lg font-semibold">Administration</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DMC - student form */}
      {currentPage === 'dmc' && userType === 'student' && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student DMC Portal</h1>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
              <form onSubmit={handleDmcSearch} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                  <input type="text" placeholder="Full Name" value={studentInfo.name} onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select value={studentInfo.class} onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none">
                    <option value="">Select Class</option>
                    {Object.keys(studentsData).map(k => (
                      <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                  <input type="text" placeholder="Roll Number" value={studentInfo.rollNo} onChange={(e) => setStudentInfo({ ...studentInfo, rollNo: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold">View DMC</button>
              </form>

              <div className="mt-4">
                <button onClick={() => { setUserType(''); setStudentInfo({ name: '', class: '', rollNo: '' }); setCurrentPage('dmc'); }} className="text-sm text-gray-600">Go back</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STUDENT DMC DETAIL */}
      {currentPage === 'student-dmc' && selectedStudent && selectedStudent.hasDmc && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg">
              <div ref={printRef} className="p-10">
                <div className="text-center border-b pb-8 mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <School className="h-12 w-12 text-blue-600" />
                    <div>
                      <h1 className="text-3xl font-bold text-blue-600">IGPS</h1>
                      <p className="text-gray-600">Iqra Grammar Public School</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold">Detailed Marks Certificate</h2>
                  <p className="text-gray-500">Academic Year: {new Date().getFullYear() - 1}-{new Date().getFullYear()}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-700">Student Name:</p>
                      <p className="text-lg">{selectedStudent.name}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Father Name:</p>
                      <p className="text-lg">{selectedStudent.fatherName}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-700">Class:</p>
                      <p className="text-lg">{(selectedStudent.className || selectedStudent.classKey || '').replace('-', ' ').toUpperCase()}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Roll Number:</p>
                      <p className="text-lg">{selectedStudent.rollNo}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Subject-wise Results</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Obtained Marks</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Total Marks</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Percentage</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedStudent.subjects && Object.entries(selectedStudent.subjects).map(([subject, data]) => (
                          <tr key={subject}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{subject}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{data.obtained}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{data.total}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{((data.obtained / data.total) * 100).toFixed(2)}%</td>
                            <td className="border border-gray-300 px-4 py-2 text-center font-semibold">{data.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Result Summary</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Total Obtained Marks</p>
                      <p className="text-2xl font-bold text-blue-600">{selectedStudent.totalObtained || 0}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Total Marks</p>
                      <p className="text-2xl font-bold text-green-600">{selectedStudent.totalMarks || 0}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Percentage</p>
                      <p className="text-2xl font-bold text-purple-600">{selectedStudent.percentage ? selectedStudent.percentage.toFixed(2) + '%' : '0%'}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Overall Grade</p>
                      <p className="text-2xl font-bold text-orange-600">{selectedStudent.grade || 'N/A'}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Position in Class</p>
                      <p className="text-2xl font-bold text-red-600">{selectedStudent.position || 'N/A'}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Remarks</p>
                      <p className="text-2xl font-bold text-indigo-600">
                        {selectedStudent.percentage >= 80 ? 'Excellent' :
                          selectedStudent.percentage >= 70 ? 'Good' :
                            selectedStudent.percentage >= 60 ? 'Average' : 'Needs Improvement'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8">
                  <div className="text-center">
                    <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{ width: '80%' }}>
                      <p className="font-semibold">Class Teacher</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{ width: '80%' }}>
                      <p className="font-semibold">Principal</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-t-2 border-gray-300 pt-4 mx-auto" style={{ width: '80%' }}>
                      <p className="font-semibold">Parent/Guardian</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 text-sm text-gray-500">
                  <p>Generated on: {new Date().toLocaleDateString()}</p>
                  <p>© {new Date().getFullYear()} Iqra Grammar Public School. All rights reserved.</p>
                </div>
              </div>

              <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button onClick={handlePrintDmc} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print DMC</button>
                  <button onClick={handleDownloadDmc} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download DMC</button>
                </div>

                <button onClick={() => { setSelectedStudent(null); setCurrentPage('dmc'); setUserType(''); }} className="px-4 py-2 border rounded-lg">Back to Search</button>
                {isAdminLoggedIn && (
                  <button onClick={() => {
                    setDmcStudentInfo({
                      class: selectedStudent.className || selectedStudent.classKey,
                      rollNo: selectedStudent.rollNo,
                      name: selectedStudent.name,
                      fatherName: selectedStudent.fatherName,
                      totalObtained: selectedStudent.totalObtained || 0,
                      totalMarks: selectedStudent.totalMarks || 0,
                      percentage: selectedStudent.percentage || 0,
                      grade: selectedStudent.grade || '',
                      position: selectedStudent.position || ''
                    });
                    setDmcSubjects(selectedStudent.subjects ? Object.entries(selectedStudent.subjects).map(([name, data]) => ({
                      name,
                      obtained: data.obtained.toString(),
                      total: data.total.toString(),
                      grade: data.grade
                    })) : [
                      { name: 'English', obtained: '', total: '', grade: '' },
                      { name: 'Math', obtained: '', total: '', grade: '' },
                      { name: 'Science', obtained: '', total: '', grade: '' },
                      { name: 'Urdu', obtained: '', total: '', grade: '' },
                      { name: 'Islamiat', obtained: '', total: '', grade: '' },
                      { name: 'Social Studies', obtained: '', total: '', grade: '' }
                    ]);
                    setCurrentPage('admin-dmc');
                  }} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">Edit DMC</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

               {/* FEES - choice page */}
                {currentPage === 'fees' && !userType && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fee Management</h1>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <h2 className="text-2xl font-semibold mb-8 text-center">Select User Type</h2>
              <div className="space-y-6">
                <button onClick={() => { setUserType('student'); setCurrentPage('fees'); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center justify-center space-x-3">
                  <User className="h-6 w-6" />
                  <span className="text-lg font-semibold">Student</span>
                </button>
                <button onClick={() => setCurrentPage('admin-login')} className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 flex items-center justify-center space-x-3">
                  <Settings className="h-6 w-6" />
                  <span className="text-lg font-semibold">Administration</span>
                </button>
              </div>
            </div>
          </div>
        </div>
                )}

               {/* FEES - student form */}
              {currentPage === 'fees' && userType === 'student' && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Fee Information</h1>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
              <form onSubmit={handleStudentSearch} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                  <input type="text" placeholder="Full Name" value={studentInfo.name} onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select value={studentInfo.class} onChange={(e) => setStudentInfo({ ...studentInfo, class: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none">
                    <option value="">Select Class</option>
                    {Object.keys(studentsData).map(k => (
                      <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                  <input type="text" placeholder="Roll Number" value={studentInfo.rollNo} onChange={(e) => setStudentInfo({ ...studentInfo, rollNo: e.target.value })} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold">Check Fee Status</button>
              </form>

              <div className="mt-4">
                <button onClick={() => { setUserType(''); setStudentInfo({ name: '', class: '', rollNo: '' }); setCurrentPage('fees'); }} className="text-sm text-gray-600">Go back</button>
              </div>
            </div>
          </div>
        </div>
               )}

             {/* STUDENT FEE DETAIL */}
             {currentPage === 'student-fee-detail' && selectedStudent && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg">
              <div ref={printRef} className="p-10">
                <div className="text-center border-b pb-8 mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <School className="h-12 w-12 text-blue-600" />
                    <div>
                      <h1 className="text-3xl font-bold text-blue-600">IGPS</h1>
                      <p className="text-gray-600">Iqra Grammar Public School</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold">Fee Statement</h2>
                  <p className="text-gray-500">Generated on: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-700">Student Name:</p>
                      <p className="text-lg">{selectedStudent.name}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Father Name:</p>
                      <p className="text-lg">{selectedStudent.fatherName}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-700">Class:</p>
                      <p className="text-lg">{(selectedStudent.className || selectedStudent.classKey || '').replace('-', ' ').toUpperCase()}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Roll Number:</p>
                      <p className="text-lg">{selectedStudent.rollNo}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Fee Details</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Monthly Fee</p>
                      <p className="text-2xl font-bold text-blue-600">{formatCurrency(selectedStudent.monthlyFee)}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Pending Fee</p>
                      <p className="text-2xl font-bold text-red-600">{formatCurrency(calculateTotalPendingForStudent(selectedStudent))}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm font-medium text-gray-600">Total Paid</p>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(selectedStudent.totalPaid)}</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className={`text-lg font-bold ${(calculateTotalPendingForStudent(selectedStudent) || 0) > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      Status: {(calculateTotalPendingForStudent(selectedStudent) || 0) > 0 ? 'Fee Pending' : 'All Fees Paid'}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Extra Fees</h3>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Label</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedStudent.extraFees || []).map((ef) => (
                          <tr key={ef.id}>
                            <td className="border border-gray-300 px-4 py-2">{ef.label}</td>
                            <td className="border border-gray-300 px-4 py-2">{formatCurrency(ef.amount)}</td>
                            <td className="border border-gray-300 px-4 py-2">{ef.status}</td>
                            <td className="border border-gray-300 px-4 py-2">{ef.datePaid || '-'}</td>
                          </tr>
                        ))}
                        {(selectedStudent.extraFees || []).length === 0 && (
                          <tr><td colSpan={4} className="p-4 text-center text-gray-500">No extra fees.</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">Fee History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Month</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Date Paid</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedStudent.feeHistory || []).map((fee, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{fee.month}</td>
                            <td className="border border-gray-300 px-4 py-2">{formatCurrency(fee.amount)}</td>
                            <td className="border border-gray-300 px-4 py-2">{fee.status}</td>
                            <td className="border border-gray-300 px-4 py-2">{fee.date || '-'}</td>
                            <td className="border border-gray-300 px-4 py-2">{fee.note || '-'}</td>
                          </tr>
                        ))}
                        {(selectedStudent.feeHistory || []).length === 0 && (
                          <tr><td colSpan={5} className="p-4 text-center text-gray-500">No fee history yet.</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button onClick={handleOpenPrintable} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Printer className="h-4 w-4" /> Print</button>
                  <button onClick={handleDownloadHtml} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"><Download className="h-4 w-4" /> Download (HTML)</button>
                </div>

                <div className="w-full md:w-auto">
                  <form onSubmit={handlePayment} className="flex flex-col md:flex-row items-center gap-3">
                    <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} className="p-3 border rounded-lg">
                      <option value="full">Pay Full Pending</option>
                      <option value="monthly">Pay Monthly Fee</option>
                      <option value="half">Pay Half Pending</option>
                      <option value="custom">Custom Amount</option>
                    </select>
                    {paymentType === 'custom' && (
                      <input type="number" placeholder="Enter amount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="p-3 border rounded-lg" />
                    )}
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-3 rounded-lg">Process Payment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
              )}

             {/* ADMIN LOGIN */}
            {currentPage === 'admin-login' && (
        <div className="container mx-auto px-4 py-12 max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Administration Login</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} placeholder="Username" className="w-full p-3 border rounded-lg" />
              <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="Password" className="w-full p-3 border rounded-lg" />
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</button>
                <button type="button" onClick={() => { setCurrentPage('fees'); setUserType(''); }} className="text-sm text-gray-600">Back</button>
              </div>
            </form>
          </div>
        </div>
             )}

             {/* ADMIN DASHBOARD */}
             {isAdminLoggedIn && currentPage === 'admin-dashboard' && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          {/* Teacher Management Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">Teacher Management</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <UserPlus className="h-6 w-6 mr-2" />
                  Add New Teacher
                </h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input value={newTeacher.name} onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })} placeholder="Full Name" className="w-full p-3 border rounded-lg" />
                    <input value={newTeacher.fatherName} onChange={(e) => setNewTeacher({ ...newTeacher, fatherName: e.target.value })} placeholder="Father's Name" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input value={newTeacher.cnic} onChange={(e) => setNewTeacher({ ...newTeacher, cnic: e.target.value })} placeholder="CNIC" className="w-full p-3 border rounded-lg" />
                    <input value={newTeacher.phone} onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })} placeholder="Phone" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input value={newTeacher.salary} onChange={(e) => setNewTeacher({ ...newTeacher, salary: e.target.value })} placeholder="Salary" className="w-full p-3 border rounded-lg" />
                    <input value={newTeacher.section} onChange={(e) => setNewTeacher({ ...newTeacher, section: e.target.value })} placeholder="Subject/Department" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <input value={newTeacher.qualification} onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })} placeholder="Qualifications" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input value={newTeacher.experience} onChange={(e) => setNewTeacher({ ...newTeacher, experience: e.target.value })} placeholder="Experience (years)" className="w-full p-3 border rounded-lg" />
                    <input type="date" value={newTeacher.joinDate} onChange={(e) => setNewTeacher({ ...newTeacher, joinDate: e.target.value })} placeholder="Join Date" className="w-full p-3 border rounded-lg" />
                  </div>
                  <button onClick={addTeacher} className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full">
                    <UserPlus className="h-5 w-5 mr-2" />
                    Add Teacher
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Teaching Staff ({teachersData.length})
                </h4>
                <div className="overflow-x-auto max-h-96 bg-white rounded-lg shadow">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Subject</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Salary</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {teachersData.map(teacher => (
                        <tr key={teacher.id} className="hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <div className="font-medium">{teacher.name}</div>
                              <div className="text-sm text-gray-500">{teacher.qualification}</div>
                            </div>
                          </td>
                          <td className="p-3">{teacher.section}</td>
                          <td className="p-3">{formatCurrency(teacher.salary)}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <button onClick={() => viewTeacherDetails(teacher)} className="p-1 text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button onClick={() => deleteTeacher(teacher.id)} className="p-1 text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {teachersData.length === 0 && (
                        <tr><td colSpan={4} className="p-4 text-center text-gray-500">No teachers added yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Teacher Statistics */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
              <h4 className="text-xl font-semibold mb-4">Teacher Statistics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{teachersData.length}</div>
                  <div className="text-sm">Total Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {teachersData.reduce((acc, teacher) => acc + teacher.salary, 0).toLocaleString()}
                  </div>
                  <div className="text-sm">Total Salary Expense</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {teachersData.length ? Math.round(teachersData.reduce((acc, teacher) => acc + teacher.salary, 0) / teachersData.length) : 0}
                  </div>
                  <div className="text-sm">Average Salary</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {new Set(teachersData.map(t => t.section)).size}
                  </div>
                  <div className="text-sm">Departments</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Add New Class</h3>
              <div className="flex gap-2">
                <input value={newClassName} onChange={(e) => setNewClassName(e.target.value)} placeholder="class-4 or class-5 (key)" className="flex-1 p-3 border rounded-lg" />
                <button onClick={addClass} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Apply Global Extra Fee</h4>
                <div className="flex gap-2 items-center mb-2">
                  <input value={globalExtraLabel} onChange={(e) => setGlobalExtraLabel(e.target.value)} placeholder="Label (e.g. Exam Fee)" className="p-2 border rounded flex-1" />
                  <input value={globalExtraAmount} onChange={(e) => setGlobalExtraAmount(e.target.value)} placeholder="Amount" type="number" className="p-2 border rounded w-28" />
                  <button onClick={applyGlobalExtraToSelectedClasses} className="bg-purple-600 text-white px-3 py-2 rounded">Apply to Selected</button>
                </div>

                <div className="mb-2">
                  <div className="flex gap-2 mb-2">
                    <button onClick={selectAllClasses} className="text-sm bg-gray-200 px-2 py-1 rounded">Select All</button>
                    <button onClick={deselectAllClasses} className="text-sm bg-gray-200 px-2 py-1 rounded">Deselect All</button>
                  </div>

                  <div className="max-h-40 overflow-y-auto border p-2 rounded">
                    {Object.keys(studentsData).map(k => (
                      <div key={k} className="flex items-center mb-1">
                        <input
                          type="checkbox"
                          checked={selectedClasses.includes(k)}
                          onChange={() => toggleClassSelection(k)}
                          className="mr-2"
                        />
                        <span>{k.replace('-', ' ').toUpperCase()}</span>
                      </div>
                    ))}
                    {Object.keys(studentsData).length === 0 && (
                      <div className="text-sm text-gray-500">No classes available</div>
                    )}
                  </div>
                </div>

                <h4 className="font-semibold mt-4 mb-2">Existing Global Fees</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {globalFees.map(fee => (
                    <div key={fee.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <div>
                        <div className="font-semibold">{fee.label}</div>
                        <div className="text-sm text-gray-600">{formatCurrency(fee.amount)} • {fee.date}</div>
                      </div>
                      <button onClick={() => removeGlobalExtraFee(fee.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  {globalFees.length === 0 && (
                    <div className="text-sm text-gray-500 p-2">No global fees added yet.</div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Existing Classes</h4>
                <ul className="space-y-2">
                  {Object.keys(studentsData).map(k => (
                    <li key={k} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <button onClick={() => handlePrintClass(k)} className="text-left text-blue-600 hover:underline font-medium">{k.replace('-', ' ').toUpperCase()}</button>
                        <span className="text-sm text-gray-600">({studentsData[k].length})</span>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => {
                          // quick add demo student modal-less
                          setNewStudent({ name: `Student ${studentsData[k].length + 1}`, rollNo: `${studentsData[k].length + 1}`, fatherName: 'Father Name', monthlyFee: '3000', classKey: k });
                          addStudent();
                        }} className="px-2 py-1 bg-green-600 text-white rounded text-sm flex items-center gap-1"><Plus className="h-4 w-4" />Add</button>
                        <button onClick={() => {
                          // print class quick button as well
                          handlePrintClass(k);
                        }} className="px-2 py-1 bg-gray-700 text-white rounded text-sm flex items-center gap-1"><Printer className="h-4 w-4" />Print</button>
                      </div>
                    </li>
                  ))}
                  {Object.keys(studentsData).length === 0 && <li className="text-sm text-gray-500 p-2">No classes yet. Add a class to begin.</li>}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Add Student to Class</h3>
              <div className="space-y-3">
                <input value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} placeholder="Student Full Name" className="w-full p-3 border rounded-lg" />
                <input value={newStudent.rollNo} onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })} placeholder="Roll No" className="w-full p-3 border rounded-lg" />
                <input value={newStudent.fatherName} onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
                <input value={newStudent.monthlyFee} onChange={(e) => setNewStudent({ ...newStudent, monthlyFee: e.target.value })} placeholder="Monthly Fee" className="w-full p-3 border rounded-lg" />
                <select value={newStudent.classKey} onChange={(e) => setNewStudent({ ...newStudent, classKey: e.target.value })} className="w-full p-3 border rounded-lg">
                  <option value="">Select Class</option>
                  {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
                </select>
                <div className="flex gap-2">
                  <button onClick={addStudent} className="bg-green-600 text-white px-4 py-2 rounded-lg">Add Student</button>
                  <button onClick={() => { setNewStudent({ name: '', rollNo: '', fatherName: '', monthlyFee: '', classKey: '' }); }} className="px-4 py-2 border rounded-lg">Clear</button>
                </div>
              </div>

              {/* DMC Management Section */}
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4">DMC Management</h4>
                <div className="space-y-3">
                  <select value={dmcStudentInfo.class} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, class: e.target.value })} className="w-full p-3 border rounded-lg">
                    <option value="">Select Class for DMC</option>
                    {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
                  </select>
                 <input 
  type="number"
  value={dmcStudentInfo.rollNo} 
  onChange={(e) => 
    setDmcStudentInfo(prev => ({ ...prev, rollNo: e.target.value }))
  } 
  placeholder="Roll Number" 
  className="w-full p-3 border rounded-lg" 
/>
                  <button onClick={() => { setCurrentPage('admin-dmc'); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Manage DMC</button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">All Students Overview</h3>

              {/* editing panel */}
              {editingStudent && (
                <div className="bg-yellow-50 p-4 mb-4 rounded">
                  <h4 className="font-semibold mb-2">Edit Student</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    <input value={editingStudent.name} onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })} className="p-2 border rounded" />
                    <input value={editingStudent.fatherName} onChange={(e) => setEditingStudent({ ...editingStudent, fatherName: e.target.value })} className="p-2 border rounded" />
                    <input value={editingStudent.rollNo} onChange={(e) => setEditingStudent({ ...editingStudent, rollNo: e.target.value })} className="p-2 border rounded" />
                    <input type="number" value={editingStudent.monthlyFee || 0} onChange={(e) => setEditingStudent({ ...editingStudent, monthlyFee: e.target.value })} className="p-2 border rounded" />
                    <input type="number" value={editingStudent.pendingFee || 0} onChange={(e) => setEditingStudent({ ...editingStudent, pendingFee: e.target.value })} className="p-2 border rounded" />
                    <input type="number" value={editingStudent.totalPaid || 0} onChange={(e) => setEditingStudent({ ...editingStudent, totalPaid: e.target.value })} className="p-2 border rounded" />
                  </div>

                  <div className="mt-3">
                    <h5 className="font-medium mb-2">Extra Fees for this Student</h5>
                    <div className="space-y-2">
                      {(editingStudent.extraFees || []).map(ef => (
                        <div key={ef.id} className="flex items-center justify-between bg-white p-2 rounded border">
                          <div>
                            <div className="font-semibold">{ef.label}</div>
                            <div className="text-sm text-gray-600">{formatCurrency(ef.amount)} • {ef.status}</div>
                          </div>
                          <div className="flex gap-2">
                            {ef.status === 'pending' && <button onClick={() => removeExtraFromStudent(editingStudent.classKey, editingStudent.id, ef.id)} className="px-2 py-1 border rounded text-sm">Remove</button>}
                          </div>
                        </div>
                      ))}
                      {(editingStudent.extraFees || []).length === 0 && <div className="text-sm text-gray-500">No extra fees</div>}
                    </div>

                    <div className="mt-3 flex gap-2 items-center">
                      <input value={editExtraLabel} onChange={(e) => setEditExtraLabel(e.target.value)} placeholder="Extra label" className="p-2 border rounded flex-1" />
                      <input value={editExtraAmount} onChange={(e) => setEditExtraAmount(e.target.value)} placeholder="Amount" type="number" className="p-2 border rounded w-28" />
                      <button onClick={addExtraToEditingStudent} className="px-3 py-2 bg-indigo-600 text-white rounded">Add Extra</button>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button onClick={saveEditedStudent} className=" px-3 py-1 rounded">Cancel</button>
                    <button onClick={() => {setEditingStudent; addToast('Edit Successful')}} className="bg-blue-600 text-white px-3 py-1 border rounded">Save</button>
                  </div>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 border">ID</th>
                      <th className="p-2 border">Name</th>
                      <th className="p-2 border">Father</th>
                      <th className="p-2 border">Class</th>
                      <th className="p-2 border">Roll</th>
                      <th className="p-2 border">Monthly</th>
                      <th className="p-2 border">Pending</th>
                      <th className="p-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getAllStudents().map(s => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="p-2 border">{s.id}</td>
                        <td className="p-2 border">{s.name}</td>
                        <td className="p-2 border">{s.fatherName}</td>
                        <td className="p-2 border">{(s.classKey || s.className).replace('-', ' ').toUpperCase()}</td>
                        <td className="p-2 border">{s.rollNo}</td>
                        <td className="p-2 border">{formatCurrency(s.monthlyFee)}</td>
                        <td className="p-2 border">{formatCurrency(calculateTotalPendingForStudent(s))}</td>
                        <td className="p-2 border">
                          <div className="flex gap-2">
                            <button onClick={() => { setSelectedStudent({ ...s, className: s.classKey }); setCurrentPage('student-fee-detail'); }} className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
                            <button onClick={() => setEditingStudent({ ...s, classKey: s.classKey })} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
                            <button onClick={() => deleteStudent(s.classKey, s.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {getAllStudents().length === 0 && (
                      <tr><td colSpan={8} className="p-4 text-center text-gray-500">No students yet — add students from the panel above.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
             )}

            {/* ADMIN DMC MANAGEMENT */}
            {isAdminLoggedIn && currentPage === 'admin-dmc' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-4">DMC Management</h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Add/Edit DMC</h3>

                <div className="space-y-3 mb-4">
                  <select value={dmcStudentInfo.class} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, class: e.target.value })} className="w-full p-3 border rounded-lg">
                    <option value="">Select Class</option>
                    {Object.keys(studentsData).map(k => <option key={k} value={k}>{k.replace('-', ' ').toUpperCase()}</option>)}
                  </select>

                  <input value={dmcStudentInfo.rollNo} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />

                  <button onClick={() => {
                    // Find student to pre-fill name and father name
                    if (dmcStudentInfo.class && dmcStudentInfo.rollNo) {
                      const student = (studentsData[dmcStudentInfo.class] || []).find(s => s.rollNo === dmcStudentInfo.rollNo);
                      if (student) {
                        setDmcStudentInfo(prev => ({
                          ...prev,
                          name: student.name,
                          fatherName: student.fatherName
                        }));
                      }
                    }
                  }} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Load Student Info</button>
                </div>

                {dmcStudentInfo.name && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p><strong>Student:</strong> {dmcStudentInfo.name}</p>
                    <p><strong>Father:</strong> {dmcStudentInfo.fatherName}</p>
                  </div>
                )}

                <div className="space-y-3">
                  <input value={dmcStudentInfo.totalObtained} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, totalObtained: parseInt(e.target.value) || 0 })} placeholder="Total Obtained Marks" className="w-full p-3 border rounded-lg" />
                  <input value={dmcStudentInfo.totalMarks} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, totalMarks: parseInt(e.target.value) || 0 })} placeholder="Total Marks" className="w-full p-3 border rounded-lg" />
                  <input value={dmcStudentInfo.percentage} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, percentage: parseFloat(e.target.value) || 0 })} placeholder="Percentage" className="w-full p-3 border rounded-lg" />
                  <input value={dmcStudentInfo.grade} onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, grade: e.target.value })} placeholder="Grade" className="w-full p-3 border rounded-lg" />
                  <input
                    value={dmcStudentInfo.position}
                    onChange={(e) => setDmcStudentInfo({ ...dmcStudentInfo, position: e.target.value })}
                    placeholder="Position in class"
                    className="w-full p-3 border rounded-lg"
                  />

                  <button onClick={addDmc} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Save DMC</button>
                </div>

                <h4 className="font-semibold mt-6 mb-3">Subjects</h4>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {dmcSubjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <input
                          value={subject.name}
                          onChange={(e) => updateDmcSubject(index, 'name', e.target.value)}
                          placeholder="Subject Name"
                          className="flex-1 p-2 border rounded mr-2"
                        />
                        <button onClick={() => removeSubject(index)} className="p-2 bg-red-500 text-white rounded">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          value={subject.obtained}
                          onChange={(e) => updateDmcSubject(index, 'obtained', e.target.value)}
                          placeholder="Obtained"
                          type="number"
                          className="p-2 border rounded"
                        />
                        <input
                          value={subject.total}
                          onChange={(e) => updateDmcSubject(index, 'total', e.target.value)}
                          placeholder="Total"
                          type="number"
                          className="p-2 border rounded"
                        />
                        <input
                          value={subject.grade}
                          onChange={(e) => updateDmcSubject(index, 'grade', e.target.value)}
                          placeholder="Grade"
                          className="p-2 border rounded"
                        />
                      </div>
                    </div>
                  ))}
                  <button onClick={addNewSubject} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center">
                    <Plus className="h-4 w-4 mr-1" /> Add Subject
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Existing DMCs</h3>

                <div className="overflow-x-auto max-h-96">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-2 border">Class</th>
                        <th className="p-2 border">Roll No</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Percentage</th>
                        <th className="p-2 border">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(resultsData).map(([className, classResults]) =>
                        Object.entries(classResults).map(([rollNo, result]) => (
                          <tr key={`${className}-${rollNo}`} className="hover:bg-gray-50">
                            <td className="p-2 border">{className.replace('-', ' ').toUpperCase()}</td>
                            <td className="p-2 border">{rollNo}</td>
                            <td className="p-2 border">{result.name}</td>
                            <td className="p-2 border">{result.percentage}%</td>
                            <td className="p-2 border">
                              <button onClick={() => {
                                setDmcStudentInfo({
                                  class: className,
                                  rollNo: rollNo,
                                  name: result.name,
                                  fatherName: result.fatherName,
                                  totalObtained: result.totalObtained || 0,
                                  totalMarks: result.totalMarks || 0,
                                  percentage: result.percentage || 0,
                                  grade: result.grade || '',
                                  position: result.position || ''
                                });
                                setDmcSubjects(result.subjects ? Object.entries(result.subjects).map(([name, data]) => ({
                                  name,
                                  obtained: data.obtained.toString(),
                                  total: data.total.toString(),
                                  grade: data.grade
                                })) : [
                                  { name: 'English', obtained: '', total: '', grade: '' },
                                  { name: 'Math', obtained: '', total: '', grade: '' },
                                  { name: 'Science', obtained: '', total: '', grade: '' },
                                  { name: 'Urdu', obtained: '', total: '', grade: '' },
                                  { name: 'Islamiat', obtained: '', total: '', grade: '' },
                                  { name: 'Social Studies', obtained: '', total: '', grade: '' }
                                ]);
                              }} className="px-2 py-1 bg-blue-600 text-white rounded text-sm mr-1">Edit</button>
                              <button onClick={() => deleteDmc(className, rollNo)} className="px-2 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
                            </td>
                          </tr>
                        ))
                      )}
                      {Object.keys(resultsData).length === 0 && (
                        <tr><td colSpan={5} className="p-4 text-center text-gray-500">No DMCs added yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
            </div>
          </div>
        </div>
            )}

            {/* ADMIN SEARCH */}
            {isAdminLoggedIn && currentPage === 'admin-search' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-4">Search Students</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex gap-2 mb-4">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, father, roll or class"
                className="flex-1 p-3 border rounded-lg"
              />
              <button
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 border rounded-lg"
              >
                Clear
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Father</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Roll</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    const students = getFilteredStudents();
                    return (
                      <>
                        {students.map((s) => (
                          <tr key={s.id} className="hover:bg-gray-50">
                            <td className="p-2 border">{s.name}</td>
                            <td className="p-2 border">{s.fatherName}</td>
                            <td className="p-2 border">
                              {(s.classKey || s.className || "")
                                .replace("-", " ")
                                .toUpperCase()}
                            </td>
                            <td className="p-2 border">{s.rollNo}</td>
                            <td className="p-2 border">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    setSelectedStudent(s);
                                    setCurrentPage("student-fee-detail");
                                  }}
                                  className="px-3 py-1 bg-blue-600 text-white rounded"
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => {
                                    const st = { ...s, classKey: s.classKey };
                                    const html = buildPrintableHtml([st]);
                                    openPrintWindow(html);
                                  }}
                                  className="px-3 py-1 bg-green-600 text-white rounded"
                                >
                                  Print
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {students.length === 0 && (
                          <tr>
                            <td
                              colSpan={5}
                              className="p-4 text-center text-gray-500"
                            >
                              No students match the search.
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            )}

            {/* ADMIN STUDENT PROFILES */}
            {isAdminLoggedIn && currentPage === 'admin-student-profiles' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-4">Student Profiles</h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Add / Edit Form */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {editingProfileId ? "Edit Student Profile" : "Add New Student Profile"}
                </h3>

                <div className="space-y-3">
                  <input value={newStudentProfile.name} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, name: e.target.value })} placeholder="Student Name" className="w-full p-3 border rounded-lg" />
                  <input value={newStudentProfile.fatherName} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, fatherName: e.target.value })} placeholder="Father Name" className="w-full p-3 border rounded-lg" />
                  <input value={newStudentProfile.class} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, class: e.target.value })} placeholder="Class" className="w-full p-3 border rounded-lg" />
                  <input value={newStudentProfile.rollNo} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, rollNo: e.target.value })} placeholder="Roll Number" className="w-full p-3 border rounded-lg" />
                  <input value={newStudentProfile.phone} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, phone: e.target.value })} placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
                  <input type="date" value={newStudentProfile.birthDate} onChange={(e) => setNewStudentProfile({ ...newStudentProfile, birthDate: e.target.value })} placeholder="Birth Date" className="w-full p-3 border rounded-lg" />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setNewStudentProfile({ ...newStudentProfile, photo: e.target.files[0] })}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>

                  {editingProfileId ? (
                    <button onClick={updateStudentProfile} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Update Profile</button>
                  ) : (
                    <button onClick={addStudentProfile} className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">Add Profile</button>
                  )}
                </div>
              </div>

              {/* Existing Profiles */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Existing Student Profiles ({studentProfiles.length})</h3>

                <div className="overflow-x-auto max-h-96">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Photo</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Class</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Roll No</th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {studentProfiles.map(profile => (
                        <tr key={profile.id} className="hover:bg-gray-50">
                          <td className="p-3">
                            {profile.photo ? (
                              <img src={profile.photo} alt={profile.name} className="h-12 w-12 rounded-full object-cover" />
                            ) : (
                              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="h-6 w-6 text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="p-3">
                            <div>
                              <div className="font-medium">{profile.name}</div>
                              <div className="text-sm text-gray-500">{profile.fatherName}</div>
                            </div>
                          </td>
                          <td className="p-3">{profile.class}</td>
                          <td className="p-3">{profile.rollNo}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <button onClick={() => viewStudentProfile(profile)} className="p-1 text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button onClick={() => startEditingProfile(profile)} className="p-1 text-yellow-600 hover:text-yellow-800">
                                <Pencil className="h-4 w-4" />
                              </button>
                              <button onClick={() => deleteStudentProfile(profile.id)} className="p-1 text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {studentProfiles.length === 0 && (
                        <tr><td colSpan={5} className="p-4 text-center text-gray-500">No student profiles added yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Back to Dashboard</button>
            </div>
          </div>
        </div>
             )}

           {/* STUDENT PROFILE DETAIL */}
            {currentPage === 'student-profile-detail' && selectedStudent && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{selectedStudent.name}</h1>
                  <p className="text-blue-100">Class: {selectedStudent.class} | Roll No: {selectedStudent.rollNo}</p>
                </div>
                <button onClick={() => setCurrentPage('admin-student-profiles')} className="bg-white text-blue-600 px-4 py-2 rounded-lg">
                  Back to Profiles
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    {selectedStudent.photo ? (
                      <img src={selectedStudent.photo} alt={selectedStudent.name} className="h-48 w-48 rounded-full object-cover mx-auto mb-4" />
                    ) : (
                      <div className="h-48 w-48 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold">{selectedStudent.name}</h3>
                    <p className="text-gray-600">{selectedStudent.class} - {selectedStudent.rollNo}</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-700">Father's Name:</p>
                        <p className="text-lg">{selectedStudent.fatherName}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Phone Number:</p>
                        <p className="text-lg">{selectedStudent.phone || 'Not provided'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Date of Birth:</p>
                      <p className="text-lg">{selectedStudent.birthDate || 'Not provided'}</p>
                    </div>
                  </div>
                  <div>
                      <div>
                        <div className="mt-6">
                          <h3 className="text-xl font-semibold mb-4 text-gray-700">Academic Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold text-gray-700">Class:</p>
                              <p className="text-lg">{selectedStudent.class}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-700">Roll Number:</p>
                              <p className="text-lg">{selectedStudent.rollNo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-gray-500 mr-3" />
                          <span className="font-medium">Phone:</span>
                          <span className="ml-2">{selectedStudent.phone || 'Not provided'}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                          <span className="font-medium">Date of Birth:</span>
                          <span className="ml-2">{selectedStudent.birthDate || 'Not provided'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 border-t">
                    <div className="flex flex-wrap gap-4">
                      <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <Printer className="h-4 w-4 mr-2" />
                        Print Profile
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            )}

            {/* TEACHER DETAILS */}
            {isAdminLoggedIn && currentPage === 'teacher-details' && selectedTeacher && (
              <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="text-3xl font-bold">{selectedTeacher.name}</h1>
                        <p className="text-blue-100">{selectedTeacher.section} Department</p>
                      </div>
                      <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-white text-blue-600 px-4 py-2 rounded-lg">
                        Back to Dashboard
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Father's Name:</span>
                            <span className="ml-2">{selectedTeacher.fatherName}</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">CNIC:</span>
                            <span className="ml-2">{selectedTeacher.cnic}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Phone:</span>
                            <span className="ml-2">{selectedTeacher.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Book className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Qualifications:</span>
                            <span className="ml-2">{selectedTeacher.qualification || 'Not specified'}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Employment Details</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Salary:</span>
                            <span className="ml-2">{formatCurrency(selectedTeacher.salary)}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Join Date:</span>
                            <span className="ml-2">{selectedTeacher.joinDate || 'Not specified'}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Experience:</span>
                            <span className="ml-2">{selectedTeacher.experience || 'Not specified'} years</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="font-medium">Status:</span>
                            <span className="ml-2 text-green-600 font-medium">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold mb-4 text-gray-700">Classes Assigned</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.keys(studentsData).slice(0, 4).map(classKey => (
                          <div key={classKey} className="bg-blue-50 p-4 rounded-lg text-center">
                            <div className="text-lg font-semibold">{classKey.replace('-', ' ').toUpperCase()}</div>
                            <div className="text-sm text-gray-600">{studentsData[classKey].length} students</div>
                          </div>
                        ))}
                        {Object.keys(studentsData).length > 4 && (
                          <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <div className="text-lg font-semibold">+{Object.keys(studentsData).length - 4} more</div>
                            <div className="text-sm text-gray-600">Classes</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 border-t">
                    <div className="flex flex-wrap gap-4">
                      <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <Printer className="h-4 w-4 mr-2" />
                        Print Profile
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Edit Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LEAVING CERTIFICATE PAGE */}
            {currentPage === 'leaving-certificate' && (
              <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h1 className="text-3xl font-bold text-center mb-8">Leaving Certificate</h1>

                  <div className="max-w-4xl mx-auto">
                    <div ref={printRef} className="p-8 border-2 border-dashed border-gray-300">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">IQRA GRAMMAR PUBLIC SCHOOL</h2>
                        <p className="text-gray-600">Gulshan Hameed Colony, Opposite Wensum College, Dera Ismail Khan</p>
                        <p className="text-gray-600">Phone: 03365716844</p>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold underline">LEAVING CERTIFICATE</h3>
                      </div>

                      <div className="space-y-4 mb-6">
                        <p>This is to certify that <span className="font-semibold">[Student Name]</span>,
                          son/daughter of <span className="font-semibold">[Father Name]</span>,
                          was a student of this school from <span className="font-semibold">[Admission Date]</span>
                          to <span className="font-semibold">[Leaving Date]</span>.</p>

                        <p>He/She was studying in class <span className="font-semibold">[Class]</span>
                          and his/her roll number was <span className="font-semibold">[Roll Number]</span>.</p>

                        <p>His/Her conduct during the stay in the school was <span className="font-semibold">[Conduct]</span>.</p>

                        <p>He/She has paid all the dues of the school and has no outstanding amount against him/her.</p>

                        <p>We wish him/her success in future endeavors.</p>
                      </div>

                      <div className="flex justify-between items-end mt-12">
                        <div>
                          <p>Date: <span className="font-semibold">{new Date().toLocaleDateString()}</span></p>
                          <p>Place: Dera Ismail Khan</p>
                        </div>
                        <div className="text-center">
                          <div className="mb-2">_________________________</div>
                          <div className="font-semibold">Principal</div>
                          <div>Iqra Grammar Public School</div>
                        </div>
                      </div>

                      <div className="text-center mt-8 text-sm text-gray-500">
                        <p>Note: This certificate is computer generated and does not require signature.</p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center space-x-4">
                      <button onClick={handlePrintLeavingCertificate} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <Printer className="h-4 w-4 mr-2" />
                        Print Certificate
                      </button>
                      <button onClick={handleDownloadLeavingCertificate} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </button>
                      <button onClick={() => setCurrentPage('admin-dashboard')} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Back to Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

           
           <footer className="border-t mt-12 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Iqra Grammar Public School</footer>
          
            {/* Toast animation style */}

            <style>{`
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slideIn {
  animation: slideIn 0.35s ease-out;
}
/* hide print helpers in screen */
@media print {
  .animate-slideIn, nav, footer, .fixed { display: none !important; }
}
`}</style>
          </div>
      );
}
