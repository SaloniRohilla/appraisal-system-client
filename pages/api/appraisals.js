import connectDB from '../../server/config/db';
import Appraisal from '../../server/models/Appraisal'; // Assuming you have an Appraisal model

export default async function handler(req, res) {
    // Connect to the database
    await connectDB();

    if (req.method === 'GET') {
        try {
            const { 
                page = 1, 
                limit = 10, 
                status 
            } = req.query;

            const query = status ? { status } : {};
            
            const appraisals = await Appraisal.find(query)
                .populate('employee', 'name')
                .skip((page - 1) * limit)
                .limit(Number(limit));

            const total = await Appraisal.countDocuments(query);

            res.status(200).json({
                appraisals,
                pagination: {
                    currentPage: Number(page),
                    totalPages: Math.ceil(total / limit),
                    totalAppraisals: total
                }
            });
        } catch (error) {
            console.error('Error fetching appraisals:', error);
            res.status(500).json({ 
                error: 'Failed to fetch appraisals',
                details: error.message 
            });
        }
    } else if (req.method === 'POST') {
        try {
            const { employee, questions } = req.body;

            // Validate input
            if (!employee || !questions || questions.length === 0) {
                return res.status(400).json({ 
                    error: 'Missing required fields',
                    requiredFields: ['employee', 'questions']
                });
            }

            // Create new appraisal
            const newAppraisal = new Appraisal({
                employee,
                questions,
                status: 'Pending',
                createdAt: new Date()
            });

            await newAppraisal.save();

            res.status(201).json({
                message: 'Appraisal submitted successfully',
                appraisal: newAppraisal
            });
        } catch (error) {
            console.error('Failed to submit appraisal', error);
            res.status(500).json({ 
                error: 'Failed to submit appraisal',
                details: error.message 
            });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ error: 'Method not allowed' });
    }
}