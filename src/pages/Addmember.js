import { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Stack, 
  MenuItem,
  Typography,
  Divider,
  Switch,
  Alert,
  CircularProgress
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../supabase';
import { Box } from '@mui/material';

// Validation schema
const validationSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  middle_name: yup.string(),
  last_name: yup.string().required('Last name is required'),
  date_of_birth: yup.date().required('DOB is required'),
  baptism_date: yup.date().nullable(),
  communion_date: yup.date().nullable(),
  confirmation_date: yup.date().nullable(),
  marriage_date: yup.date().when('is_married', {
    is: true,
    then: yup.date().required('Marriage date is required'),
  }),
  parish: yup.string().required('Parish is required'),
  jummuiya: yup.string(),
  is_married: yup.boolean(),
});

export default function MemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      date_of_birth: null,
      baptism_date: null,
      communion_date: null,
      confirmation_date: null,
      marriage_date: null,
      is_married: false,
      parish: '',
      jummuiya: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(null);

        // Format dates for Supabase
        const formatDate = (date) => date ? date.toISOString() : null;
        const payload = {
          ...values,
          date_of_birth: formatDate(values.date_of_birth),
          baptism_date: formatDate(values.baptism_date),
          communion_date: formatDate(values.communion_date),
          confirmation_date: formatDate(values.confirmation_date),
          marriage_date: values.is_married ? formatDate(values.marriage_date) : null,
        };

        // Supabase operation
        const { error } = isEdit
          ? await supabase.from('members').update(payload).eq('id', id)
          : await supabase.from('members').insert([payload]);

        if (error) throw error;
        navigate('/members');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
  });

  // Load data for editing
  useEffect(() => {
    if (!isEdit) return;

    const fetchMember = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('members')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        formik.setValues({
          ...data,
          date_of_birth: data.date_of_birth ? new Date(data.date_of_birth) : null,
          baptism_date: data.baptism_date ? new Date(data.baptism_date) : null,
          communion_date: data.communion_date ? new Date(data.communion_date) : null,
          confirmation_date: data.confirmation_date ? new Date(data.confirmation_date) : null,
          marriage_date: data.marriage_date ? new Date(data.marriage_date) : null,
          is_married: !!data.marriage_date,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [formik, id, isEdit]);

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {isEdit ? 'Edit Member' : 'Add New Member'}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={3}>
        {/* Name Section */}
        <Typography variant="subtitle1">Personal Information</Typography>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <TextField
            fullWidth
            label="First Name *"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
            helperText={formik.touched.first_name && formik.errors.first_name}
            disabled={loading}
          />
          <TextField
            fullWidth
            label="Middle Name"
            name="middle_name"
            value={formik.values.middle_name}
            onChange={formik.handleChange}
            disabled={loading}
          />
          <TextField
            fullWidth
            label="Last Name *"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
            disabled={loading}
          />
        </Stack>

        {/* Date Fields */}
        <DatePicker
          label="Date of Birth *"
          value={formik.values.date_of_birth}
          onChange={(date) => formik.setFieldValue('date_of_birth', date)}
          disabled={loading}
          slotProps={{
            textField: {
              fullWidth: true,
              error: formik.touched.date_of_birth && Boolean(formik.errors.date_of_birth),
              helperText: formik.touched.date_of_birth && formik.errors.date_of_birth,
            },
          }}
        />

        <Typography variant="subtitle1">Sacramental Records</Typography>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <DatePicker
            label="Baptism Date"
            value={formik.values.baptism_date}
            onChange={(date) => formik.setFieldValue('baptism_date', date)}
            disabled={loading}
            sx={{ minWidth: 200 }}
          />
          <DatePicker
            label="First Communion"
            value={formik.values.communion_date}
            onChange={(date) => formik.setFieldValue('communion_date', date)}
            disabled={loading}
            sx={{ minWidth: 200 }}
          />
          <DatePicker
            label="Confirmation"
            value={formik.values.confirmation_date}
            onChange={(date) => formik.setFieldValue('confirmation_date', date)}
            disabled={loading}
            sx={{ minWidth: 200 }}
          />
        </Stack>

        {/* Marriage Field */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>Married:</Typography>
          <Switch
            checked={formik.values.is_married}
            onChange={(e) => formik.setFieldValue('is_married', e.target.checked)}
            disabled={loading}
          />
          {formik.values.is_married && (
            <DatePicker
              label="Marriage Date *"
              value={formik.values.marriage_date}
              onChange={(date) => formik.setFieldValue('marriage_date', date)}
              disabled={loading}
              sx={{ minWidth: 200 }}
              slotProps={{
                textField: {
                  error: formik.touched.marriage_date && Boolean(formik.errors.marriage_date),
                  helperText: formik.touched.marriage_date && formik.errors.marriage_date,
                },
              }}
            />
          )}
        </Stack>

        {/* Parish & Jummuiya */}
        <TextField
          select
          label="Parish *"
          name="parish"
          value={formik.values.parish}
          onChange={formik.handleChange}
          error={formik.touched.parish && Boolean(formik.errors.parish)}
          helperText={formik.touched.parish && formik.errors.parish}
          disabled={loading}
        >
          {['St. Mary', 'Sacred Heart', 'Our Lady of Guadalupe'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Jummuiya (Small Christian Community)"
          name="jummuiya"
          value={formik.values.jummuiya}
          onChange={formik.handleChange}
          disabled={loading}
        />

        {/* Form Actions */}
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button 
            variant="outlined" 
            onClick={() => navigate('/members')}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {isEdit ? 'Update' : 'Save'} Member
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}